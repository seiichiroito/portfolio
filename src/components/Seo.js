import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteDescription
        siteTitle
        image
        twitterUsername
        siteUrl
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    image,
    twitterUsername,
    siteUrl,
  } = site.siteMetadata

  const metaDescription = description || siteDescription

  const metaTitle = title || siteTitle

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },

        // Twitter
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:card",
          content: siteUrl + image,
        },
      ]}
    ></Helmet>
  )
}
export default SEO
