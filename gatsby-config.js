/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/coop-tmp-site",
  siteMetadata: {
    title: `Ellen Bass - Drexel University`,
    description: `TODO`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-postcss",
  ],
}
