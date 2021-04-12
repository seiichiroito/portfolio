import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

const AllBlog = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Wrapper>
        <div className="container blog__container">
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
    allContentfulBlog(sort: { fields: publishedAt, order: DESC }) {
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
export default AllBlog
