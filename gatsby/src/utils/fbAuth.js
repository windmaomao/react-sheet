import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../.firebase'

const auth = firebase.auth
const fbAuth = {
  init: () => {
    if (!firebase.apps.length)
      firebase.initializeApp(config)
  },
  onAuthStateChanged: cb => {
    auth().onAuthStateChanged(cb)
  },
  signInWithGoogle: () => {
    const provider = new auth.GoogleAuthProvider()
    return auth().signInWithPopup(provider)
  },
  signInWithGithub: () => {
    const provider = new auth.GithubAuthProvider()
    provider.addScope('user');
    return auth().signInWithPopup(provider)
  },
  logout: () => {
    return auth().signOut()
  },
  // Github apis
  getRepos: (token) => {
    const headers = {
      "Content-Type": `application/json`,
      "Authorization": `Bearer ${token}`
    }
    return fetch('https://api.github.com/user/repos', { headers })
      .then(res => {
        if (res.ok) return res.json()
        return []
      })
  }
}

export default fbAuth
