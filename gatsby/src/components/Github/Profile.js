import React from "react"
import { Avatar } from "theme-ui"

export default ({
  user, onLogin, onLogout
}) => {
  if (!user) {
    return (
      <button
        type="button"
        onClick={onLogin}
      >Sign In Github</button>
    )
  }

  return (
    <div>
      <Avatar
        title={user.displayName}
        src={user.photoURL}
      />
      <button
        type="button"
        onClick={onLogout}
      >Logout</button>
    </div>
  )
}
