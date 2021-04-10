import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Wrapper>contact page</Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  margin-top: var(--h-header);
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
`

export default Contact
