import React from "react"
import { Menu } from "../components"

export default function Home({ data }) {
  const title = data.site.siteMetadata.title
  return (
    <>
      <Menu />
      <h1>{title}!</h1>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
