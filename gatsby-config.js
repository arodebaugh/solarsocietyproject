/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/solarsocietyproject",
  siteMetadata: {
    title: `Solar Society Project`,
    description: `TODO`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-postcss",
  ],
}
