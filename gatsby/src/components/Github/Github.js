import React, { useState } from "react"
import { Box, Flex, Alert, Close } from "theme-ui"
import Profile from './Profile'
import Title from './Title'
import Viewer from './Viewer'
import GhContext from './GhContext'
import { ghAuth } from '../../utils'

ghAuth.init()

export default () => {
  const [site, setSite] = useState({ title: '' })
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
    <GhContext.Provider value={[site, setSite]}>
      <Box p={3} bg='primary' color='white'>
        <Flex sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Profile
            user={ghAuth.user}
            onLogin={login}
            onLogout={logout}
          />
          <Title />
        </Flex>
      </Box>
      <Box p={1}>
        {error && (
          <Alert>
            {error} <Close ml='auto' mr={-2} />
          </Alert>
        )}
        {loggedIn && <Viewer />}
      </Box>
    </GhContext.Provider>
  )
}
