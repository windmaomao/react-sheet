import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../.firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

class FirebaseAuth {
  constructor(auth, name) {
    this.auth = auth
    this.name = name
    this.user = null
    this.token = null
  }

  getProvider(name) {
    switch (name) {
      case 'google':
        return new this.auth.GoogleAuthProvider()
      case 'github':
        return new this.auth.GithubAuthProvider()
      default:

    }
  }

  login(scope) {
    const provider = this.getProvider(this.name)
    provider.addScope(scope)
    return this.auth()
      .signInWithPopup(provider)
      .then(res => {
        this.user = res.user
        this.token = res.credential.accessToken
        return this
      })
  }
}

const createAuth = (name) => {
  return new FirebaseAuth(firebase.auth, name)
}

export default createAuth
