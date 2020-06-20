import React from "react"
import { graphql } from 'gatsby'
import { Layout } from '../components'

export default ({ data }) => {
  const site = data.site.siteMetadata
  const tags = data.allBlogPost.distinct
  return (
    <Layout site={site}>
      <h1>Tags</h1>
      <ul>
        {tags.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost {
      distinct(field: tags)
    }
  }
`
