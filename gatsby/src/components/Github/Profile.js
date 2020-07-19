import React from "react"
import { Avatar } from "theme-ui"
import { AiOutlineGithub } from "react-icons/ai"
import { Button } from '../common'

export default ({
  user, onLogin, onLogout
}) => {
  if (!user) {
    return (
      <Button
        Icon={AiOutlineGithub}
        onClick={onLogin}
      >
        Sign in Github
      </Button>
    )
  }

  return (
    <Button onClick={onLogout} link>
      <Avatar
        title={user.displayName}
        src={user.photoURL}
      />
    </Button>
  )
}
