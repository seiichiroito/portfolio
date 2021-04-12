import React from "react"
import styled from "styled-components"
import SectionHeading from "./utils/SectionHeading"

const Projects = () => {
  return (
    <Wrapper>
      <div className="container projects__container">
        <SectionHeading title="Latest Blog" />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  /* Position */
  z-index: 1;
  position: relative;
  /* Color */
  background-color: var(--dark);
  box-shadow: var(--section-shadow);
  .projects__container {
    padding: 3rem 0;
  }
`

export default Projects
