/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Qplot Satellite`,
    author: `Windmaomao`,
    description: `Windmaomoa's Qplot.`,
    siteUrl: `https://qplot.com/satellite/`,
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
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`,
      },
    },
  ],
}
