import React from "react"
import { graphql } from "gatsby"
import { Menu } from "../components"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <Menu />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`