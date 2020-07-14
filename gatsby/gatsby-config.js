/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/satellite`,
  siteMetadata: {
    title: `Qplot Satellite`,
    author: `Windmaomao`,
    description: `Windmaomoa's Qplot.`,
    siteUrl: `https://qplot.com`,
    social: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/windmaomao`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/windmaomao`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-theme-blog`
  ],
}
