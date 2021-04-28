import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

const AllProjects = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data
  return (
    <Layout>
      <Seo
        title="Projects"
        description="showcase of products made by Seiichiro"
        image="projects.png"
      />
      <Wrapper>
        <div className="container">
          <Projects projects={projects} title="All Projects" />
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  background-color: var(--white);
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
`
export const query = graphql`
  {
    allContentfulProject(sort: { fields: createdAt, order: ASC }) {
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
  }
`
export default AllProjects
