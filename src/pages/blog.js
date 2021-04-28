import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Blogs from "../components/Blogs"

const AllBlog = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Seo
        title="Blog"
        description="A place where my thoughts are summarized."
        image="/blog.png"
      />
      <Wrapper>
        <div className="container blog__container px-8">
          <Blogs blogs={blogs} title="Blog" />
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--dark);
  .blog__container {
    section {
      box-shadow: none;
    }
  }
`
export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
export default AllBlog
