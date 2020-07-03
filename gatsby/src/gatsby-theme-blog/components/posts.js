import React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

const tag = location => {
  if (location.pathname === '/') return 'frontpage'
  return ''
}

const tagged = tag => item => {
  if (!tag) return true
  return item.node.tags.indexOf(tag) >= 0
}

export default ({ location, posts, siteTitle, socialLinks }) => {
  const filteredPosts = posts.filter(tagged(tag(location)))
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <main>
        <PostList posts={filteredPosts} />
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
  )
}
