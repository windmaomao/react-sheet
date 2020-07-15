import React, { useState, useEffect } from "react"
import firebase from 'firebase'
import config from '../../.firebase'

if (!firebase.apps.length)
  firebase.initializeApp(config)
const auth = firebase.auth

function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider()
  return auth().signInWithPopup(provider)
}

export default () => {
  const [authUser, setAuthUser] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log(user)
      setAuthUser(user)
    })
  }, [setAuthUser])

  const googleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1>My Account</h1>
      <p>
        <button
          type="button"
          onClick={googleSignIn}
        >Sign In Google</button>
      </p>
      <p>{authUser ? authUser.displayName : ''}</p>
      <p>{error}</p>
    </div>
  )
}
