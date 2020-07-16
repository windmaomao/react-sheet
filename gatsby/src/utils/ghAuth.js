import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../.firebase'

const auth = firebase.auth
const ghApi = `https://api.github.com`
const apis = {
  repos: `/user/repos`
}
const ghAuth = {
  user: null,
  token: null,
  init: () => {
    if (!firebase.apps.length)
      firebase.initializeApp(config)
  },
  login: () => {
    const provider = new auth.GithubAuthProvider()
    provider.addScope('user')
    return auth().signInWithPopup(provider).then(
      res => {
        ghAuth.user = res.user
        ghAuth.token = res.credential.accessToken
        return ghAuth
      }
    )
  },
  logout: () => {
    return auth().signOut().then(
      () => {
        ghAuth.user = null
        ghAuth.token = null
      }
    )
  },
  fetch: name => {
    const headers = {
      "Content-Type": `application/json`,
      "Authorization": `Bearer ${ghAuth.token}`
    }
    return fetch(`${ghApi}${apis[name]}`, { headers })
      .then(res => {
        if (res.ok) return res.json()
        return []
      })
  }
}

export default ghAuth