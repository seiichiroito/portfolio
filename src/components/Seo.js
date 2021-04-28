import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteDescription
        siteTitle
        siteImage
        twitterUsername
        siteUrl
      }
    }
  }
`
const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    siteImage,
    twitterUsername,
    siteUrl,
  } = site.siteMetadata

  const metaDescription = description || siteDescription

  const metaTitle = title || siteTitle

  const metaImage = `${siteUrl}${image || siteImage}`

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
          name: "twitter:image",
          content: metaImage,
        },
      ]}
    >
      {/* <script
        data-ad-client="ca-pub-2160447206289701"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script> */}
    </Helmet>
  )
}
export default SEO
