import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SectionHeading from "./utils/SectionHeading"

import Project from "./Project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <Wrapper>
      <div className="container projects__container">
        <SectionHeading title={title} dark />
        <ul className="project-list">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </ul>
        {showLink && (
          <Link className="projects-btn" to="/projects">
            All Projects
          </Link>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Color */
  background-color: var(--white);

  .projects__container {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
  }
  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 2rem 0;
    @media (min-width: 768px) {
      li:nth-child(even) {
        .hero {
          order: 1;
        }
      }
    }
  }
  .projects-btn {
    background-color: var(--primary-5);
    color: var(--white);
    padding: 0.8rem 1rem;
    margin: 0 auto;
    text-decoration: none;
    &:hover {
      transform: scale(1.02);
    }
  }
`

export default Projects
