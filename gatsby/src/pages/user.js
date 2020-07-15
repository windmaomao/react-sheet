import React, { useState, useEffect } from "react"
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
  logout: () => {
    return auth().signOut()
  }
}

fbAuth.init()

export default () => {
  const [authUser, setAuthUser] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    fbAuth.onAuthStateChanged(user => {
      setAuthUser(user)
    })
  }, [setAuthUser])

  const googleSignIn = async () => {
    try {
      await fbAuth.signInWithGoogle()
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    try {
      await fbAuth.logout()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      {authUser ? (
        <div>
          <img
            title={authUser.displayName}
            src={authUser.photoURL}
            alt="profile"
            width="24"
            height="24"
          />
          <button
            type="button"
            onClick={logout}
          >Logout</button>
        </div>
      ) : (
        <button
          type="button"
          onClick={googleSignIn}
        >Sign In Google</button>
      )}
      <p>{error}</p>
    </div>
  )
}
