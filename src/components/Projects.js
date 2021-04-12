import React from "react"
import styled from "styled-components"
import SectionHeading from "./utils/SectionHeading"

import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <Wrapper>
      <div className="container projects__container">
        <SectionHeading title="Project" dark />
        <ul className="card">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Color */
  background-color: var(--light);

  .projects__container {
    padding: 3rem 0;
  }
  .card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 2rem 0;
  }
`

export default Projects
