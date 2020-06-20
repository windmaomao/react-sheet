import React from 'react'
import Posts from "gatsby-theme-blog/src/components/posts"

// export default props => <pre>{JSON.stringify(props, null, 2)}</pre>

export default ({ location, data }) => {
  const { allBlogPost } = data
  return (
    <Posts
      location={location}
      posts={allBlogPost.edges}
      siteTitle={`Qplot Satellite`}
      // socialLinks={site.siteMetadata.social}
    />
  )
}
