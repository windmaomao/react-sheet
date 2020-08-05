import React from "react"
import { Avatar } from "theme-ui"
import { AiOutlineYoutube } from "react-icons/ai"
import { Button } from '../common'

export default ({
  user, onLogin, onLogout
}) => {
  if (!user) {
    return (
      <Button
        Icon={AiOutlineYoutube}
        onClick={onLogin}
      >
        Sign in Youtube
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
