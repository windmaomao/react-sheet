import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../../.firebase'

const auth = firebase.auth
const createProvider = name => {
  switch (name) {
    case 'google':
      return new auth.GoogleAuthProvider()
    case 'github':
      return new auth.GithubAuthProvider()
    default:

  }
}

const createAuth = (name) => {
  const provider = createProvider(name)
  const that = {
    user: null,
    token: null,
    init: () => {
      if (!firebase.apps.length)
        firebase.initializeApp(config)
    },
    login: (scope) => {
      provider.addScope(scope)
      return auth().signInWithPopup(provider).then(
        res => {
          that.user = res.user
          that.token = res.credential.accessToken
          return that
        }
      )
    },
    logout: () => {
      return auth().signOut().then(
        () => {
          that.user = null
          that.token = null
        }
      )
    },
    fetch: api => {
      const headers = {
        "Content-Type": `application/json`,
        "Authorization": `Bearer ${that.token}`
      }
      return fetch(api, { headers })
        .then(res => {
          if (res.ok) return res.json()
          return null
        })
    },
    view: url => {
      return fetch(url)
        .then(res => {
          if (res.ok) return res.text()
          return ''
        })
    }
  }
  return that
}

export default createAuth
