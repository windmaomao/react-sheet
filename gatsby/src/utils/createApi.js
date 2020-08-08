import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../.firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

class OAuthApi {
  constructor(auth, name) {
    this.auth = auth
    this.name = name
    this.provider = null
    this.domain = ''
    this.user = null
    this.token = null

    switch (name) {
      case 'google':
        this.provider = new this.auth.GoogleAuthProvider()
        this.domain = 'https://www.googleapis.com/youtube/v3'
        break
      case 'github':
        this.provider = new this.auth.GithubAuthProvider()
        break
      default:
    }
  }

  login(scope) {
    this.provider.addScope(scope)
    return this.auth()
      .signInWithPopup(this.provider)
      .then(res => {
        this.user = res.user
        this.token = res.credential.accessToken
        return this
      })
  }

  token(force) {
    return this.user.getIdToken(force)
      .then(t => {
        if (t !== this.token) {
          this.token = t
        }
      })
  }

  fetch(api) {
    const headers = {
      "Content-Type": `application/json`,
      "Authorization": `Bearer ${this.token}`
    }

    const callApi = () => fetch(`${this.domain}${api}`, { headers })
      .then(res => {
        if (res.ok) return res.json()
        return null
      })

    return token().then(callApi)
  }
}

const createApi = (name) => {
  return new OAuthApi(firebase.auth, name)
}

export default createApi
