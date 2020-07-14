import React, { useEffect, useState } from 'react'
// import userMock from '../data/userMock'

let identity = {
  on: () => {},
  currentUser: () => null
}
if (typeof window !== `undefined`) {
  identity = require("netlify-identity-widget")
  window.netlifyIdentity = identity
  identity.init()
}

const Auth = () => {
  const [user, setUser] = useState(identity.currentUser())
  useEffect(() => {
    identity.on('login', u => { setUser(u) })
    identity.on('logout', () => { setUser(null) })
    return () => {
      identity.off('login')
      identity.off('logout')
    }
  }, [setUser])

  const login = () => { identity.open() }
  const logout = () => { identity.logout() }

  if (!user) {
    return (
      <button onClick={login}>Login</button>
    )
  }

  const profile = user.user_metadata

  return (
    <span>
      {profile && (
        <img
          title={profile.full_name}
          src={profile.avatar_url}
          alt="profile"
          width="24"
          height="24"
        />
      )} &nbsp;
      <button onClick={logout}>Logout</button>
    </span>
  )
}

export default Auth
