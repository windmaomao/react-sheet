import React, { useState, useEffect } from "react"
import { fbAuth } from '../../utils'

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
        <span>
          <button
            type="button"
            onClick={login}
          >Sign In Github</button>
        </span>
      )}
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
