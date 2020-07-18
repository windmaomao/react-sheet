import React, { useContext } from "react"
import GhContext from './GhContext'

export default () => {
  const gh = useContext(GhContext)
console.log(gh)
  return (
    <>
      {gh.user ? 1 : 0}
      {gh.repo}
    </>
  )
}
