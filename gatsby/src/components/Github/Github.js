import React, { useState } from "react"
import { fbAuth } from '../../utils'
import Profile from './Profile'

fbAuth.init()

export default () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])

  const login = async () => {
    try {
      await fbAuth.signInWithGithub()
      setLoggedIn(true)
      const repos = await fbAuth.getRepos()
      setRepos(repos.reverse())
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
      <ul>
        {repos.map(repo => (
          <li key={repo.id} title={repo.created_at}>
            {repo.name} ({repo.size})
          </li>
        ))}
      </ul>
    </div>
  )
}
