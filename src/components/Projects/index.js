import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SectionHeading from "../utils/SectionHeading"

import Project from "./Project"

const Projects = ({ projects, title, showLink }) => {
  return (
    <Wrapper>
      <div className="container py-5">
        <SectionHeading title={title} dark />
        <ul className="project-list my-4">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </ul>
        {showLink && (
          <div className="projects-btn">
            <Link className="mx-auto py-2 px-3" to="/projects">
              All Projects
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Color */
  background-color: var(--white);

  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    @media (min-width: 768px) {
      li:nth-child(even) {
        .hero {
          order: 1;
        }
      }
    }
  }
  .projects-btn {
    display: flex;
    a {
      background-color: var(--primary-5);
      color: var(--white);
      text-decoration: none;
      font-size: var(--fz-body);
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`

export default Projects
