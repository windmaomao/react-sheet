import React from "react"
import Image from "gatsby-image"
import { css } from "theme-ui"

const Hero = ({ post }) => (
  <>
    {post?.image?.childImageSharp && (
      <div
        css={css({
          mb: `1rem`,
        })}
      >
        <Image
          fluid={post.image.childImageSharp.fluid}
          alt={post.imageAlt ? post.imageAlt : post.excerpt}
        />
      </div>
    )}
  </>
)

export default Hero
