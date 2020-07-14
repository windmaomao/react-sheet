import React from "react"
import { graphql } from 'gatsby'
import { Layout } from '../components'

export default ({ data }) => {
  const site = data.site.siteMetadata
  const tags = data.allBlogPost.group
  return (
    <Layout site={site}>
      <h1>Tags</h1>
      <ul>
        {tags.map(v => (
          <li key={v.tag}>
            {v.tag} ({v.totalCount})
          </li>
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
      group(field: tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
