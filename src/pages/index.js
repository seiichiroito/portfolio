import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Stacks from "../components/Stacks"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

const Home = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
    allContentfulBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Stacks />
      <Projects projects={projects} title="Project" showLink />
      <Blogs blogs={blogs} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
        description
        title
        tags
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        github
        url
      }
    }
    allContentfulBlog(limit: 3, sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        description
        categories
        id
        publishedAt(formatString: "Do MM, YYYY")
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default Home
