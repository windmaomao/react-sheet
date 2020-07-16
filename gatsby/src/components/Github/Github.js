import React, { useState, useEffect } from "react"
import { fbAuth } from '../../utils'
import Profile from './Profile'

fbAuth.init()

export default () => {
  const [authUser, setAuthUser] = useState(null)
  const [error, setError] = useState(null)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fbAuth.onAuthStateChanged(user => {
      setAuthUser(user)
    })
  }, [setAuthUser])

  const login = async () => {
    try {
      const res = await fbAuth.signInWithGithub()
      const token = res.credential.accessToken
      const repos = await fbAuth.getRepos(token)
      setRepos(repos.reverse())
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
      <Profile
        user={authUser}
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
