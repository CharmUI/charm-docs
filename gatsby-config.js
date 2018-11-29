const slug = require('remark-slug');
const highlight = require('remark-highlight.js');

module.exports = {
  siteMetadata: {
    title: `Charm Documentation`
  },
  pathPrefix: "/charm-docs",
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        mdPlugins: [slug, highlight]
      }
    }
  ]
}
