import React, { useState } from "react"
import { Box, Flex, Alert, Close } from "theme-ui"
import { createApi } from '../../utils'
import Profile from './Profile'

const api = createApi('google')
const scope = 'https://www.googleapis.com/auth/youtube'

export default () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null)

  const login = async () => {
    try {
      await api.login(scope)
      setLoggedIn(true)
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    try {
      await api.logout()
      setLoggedIn(false)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <Box p={3} bg='primary' color='white'>
        <Flex sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Profile
            user={api.user}
            onLogin={login}
            onLogout={logout}
          />
        </Flex>
      </Box>
      <Box p={1}>
        {error && (
          <Alert>
            {error} <Close ml='auto' mr={-2} />
          </Alert>
        )}
      </Box>
    </div>
  )
}
