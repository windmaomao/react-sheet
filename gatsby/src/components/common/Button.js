import React from "react"
import { Button, Link } from "theme-ui"

export default ({ children, Icon, link, ...props }) => {
  const Comp = link ? Link : Button
  return (
    <Comp
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      {Icon && <Icon size="1.5em" />}
      &nbsp;
      {children}
    </Comp>
  )
}
