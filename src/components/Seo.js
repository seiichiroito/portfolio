import React from "react"
import { Helmet } from "react-helmet"
const SEO = ({ title }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content="this is my content" />
    </Helmet>
  )
}

export default SEO
