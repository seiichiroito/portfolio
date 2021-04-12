import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const Projects = () => {
  return (
    <Layout>
      <Wrapper>project page</Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
`

export default Projects
