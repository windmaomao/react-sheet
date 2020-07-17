import React from "react"
import { Avatar, IconButton, Button } from "theme-ui"
import { AiOutlineLogout, AiOutlineGithub } from "react-icons/ai";

export default ({
  user, onLogin, onLogout
}) => {
  if (!user) {
    return (
      <Button
        onClick={onLogin}
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <AiOutlineGithub size="1.5rem" />
        &nbsp;Sign in Github
      </Button>
    )
  }

  return (
    <>
      <Avatar
        title={user.displayName}
        src={user.photoURL}
      />
      <IconButton
        onClick={onLogout}
        size="sm"
      >
        <AiOutlineLogout size="2em" />
      </IconButton>
    </>
  )
}
