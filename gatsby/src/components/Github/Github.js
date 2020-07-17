import React, { useState } from "react"
import { ghAuth } from '../../utils'
import Profile from './Profile'
import Viewer from './Viewer'

ghAuth.init()

export default () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null)

  const login = async () => {
    try {
      await ghAuth.login()
      setLoggedIn(true)
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    try {
      await ghAuth.logout()
      setLoggedIn(false)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <Profile
        user={ghAuth.user}
        onLogin={login}
        onLogout={logout}
      />
      <p>{error}</p>
      {loggedIn && <Viewer />}
    </div>
  )
}
