/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Seiichiro Portfolio`,
    siteDescription: `This is Seiichiro's Portfolio site`,
    author: `Seiichiro Ito`,
    siteImage: "twitter-img.png",
    twitterUsername: "@seiichiro_ito",
    siteUrl: "https://www.seiichiroito.com/",
  },
  plugins: [
    // For Style
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    // For SEO
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // For Image
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // For MDX
    `gatsby-plugin-mdx`,
    // For Content
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    // For File system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // For Font
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
  ],
}
