import React, { useState } from "react"
import { fbAuth } from '../../utils'
import Profile from './Profile'
import Repos from './Repos'

fbAuth.init()

export default () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null)

  const login = async () => {
    try {
      await fbAuth.signInWithGithub()
      setLoggedIn(true)
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    try {
      await fbAuth.logout()
      setLoggedIn(false)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <Profile
        user={fbAuth.user}
        onLogin={login}
        onLogout={logout}
      />
      <p>{error}</p>
      {loggedIn && <Repos />}
    </div>
  )
}
