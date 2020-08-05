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
    this.user = null
    this.token = null

    switch (name) {
      case 'google':
        this.provider = new this.auth.GoogleAuthProvider()
      case 'github':
        this.provider = new this.auth.GithubAuthProvider()
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
}

const createApi = (name) => {
  return new OAuthApi(firebase.auth, name)
}

export default createApi
