import React, { useState } from "react"
import { Container, Alert, Close } from "theme-ui"
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
      <Container p={0}>
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
      </Container>
      <Container p={1}>
        {loggedIn && <Viewer />}
      </Container>
    </>
  )
}
