import React from "react"

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
      <img
        title={user.displayName}
        src={user.photoURL}
        alt="profile"
        width="24"
        height="24"
      />
      <button
        type="button"
        onClick={onLogout}
      >Logout</button>
    </div>
  )
}
