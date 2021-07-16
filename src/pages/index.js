import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Stacks from "../components/Stacks"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

const Home = ({ data, location }) => {
  const {
    allContentfulProject: { nodes: projects },
    allMdx: { nodes: blogs },
  } = data
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <Hero />
      <Stacks />
      <Projects projects={projects} title="Project" showLink />
      <Blogs blogs={blogs} title="Latest Blog" showLink />
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
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          category
          date(formatString: "MMM Do, YYYY")
          slug
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        excerpt
      }
    }
  }
`
export default Home
