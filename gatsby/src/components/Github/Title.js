import React, { useContext } from "react"
import { Heading } from "theme-ui"
import GhContext from './GhContext'

export default () => {
  const [gh] = useContext(GhContext)

  return (
    <Heading as='h4'>
      {gh.title}
    </Heading>
  )
}
