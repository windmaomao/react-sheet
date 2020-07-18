import React, { useState } from "react"
import { Box, Alert, Close } from "theme-ui"
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
    <>
      <Box p={3} bg='primary'>
        <Profile
          user={ghAuth.user}
          onLogin={login}
          onLogout={logout}
        />
        {error && (
          <Alert>
            {error} <Close ml='auto' mr={-2} />
          </Alert>
        )}
      </Box>
      <Box p={1}>
        {loggedIn && <Viewer />}
      </Box>
    </>
  )
}
