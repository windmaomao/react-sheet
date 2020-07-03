import React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import PostList from "gatsby-theme-blog/src/components/post-list"

export default ({ location, posts, siteTitle, socialLinks }) => {
  const filteredPosts = posts
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
