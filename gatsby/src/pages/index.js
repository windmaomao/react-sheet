import React from "react"
import { Link } from "gatsby"

export default function Home({ data }) {
  const title = data.site.siteMetadata.title
  return (
    <>
      <Link to="/about/">About</Link>    
      <h1>{title}!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
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