"use client"

import React from "react"
import styled from "styled-components"

import SectionHeading from "../utils/SectionHeading"

import Project from "./Project"

const Projects = ({ projects, title, lead, id }) => {
  return (
    <Wrapper id={id}>
      <div className="container py-8 px-8">
        <SectionHeading title={title} dark />
        {lead && <p className="lead mt-4">{lead}</p>}
        <ul className="project-list my-8">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Color */
  background-color: var(--white);
  scroll-margin-top: var(--h-header);

  .lead {
    color: var(--dark);
    font-size: var(--fz-body);
    line-height: var(--lh-paragraph);
  }
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`

export default Projects
