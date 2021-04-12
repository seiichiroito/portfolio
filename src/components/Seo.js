import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },

        // Twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    ></Helmet>
  )
}
export default SEO
