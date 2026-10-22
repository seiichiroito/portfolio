"use client"

import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"

import Tags from "../Tags"

const Project = ({ project, index }) => {
  return (
    <Wrapper>
      <div className="hero">
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.title}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 768px) 400px, 100vw"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        )}
      </div>
      <aside className="p-4">
        <div className="main">
          <h5>
            {index + 1}. {project.title}
          </h5>
          <p className="mt-4">{project.description}</p>
        </div>
        <div className="footer mt-4">
          <Tags tags={project.tags} />
          <ul className="links">
            <li>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title}: Code on GitHub (opens in a new tab)`}
              >
                <FaGithubSquare aria-hidden="true" /> <span>Code</span>
              </a>
            </li>
            <li>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: View site (opens in a new tab)`}>
                <FaExternalLinkAlt aria-hidden="true" /> <span>View site</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  box-shadow: var(--light-shadow);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main {
    color: var(--dark);
    h5 {
      line-height: var(--lh-heading);
      font-size: var(--fz-heading-5);
    }
    p {
      font-size: var(--fz-body);
      line-height: var(--lh-paragraph);
    }
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    .links {
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      li {
        transition: var(--transition);
        &:hover {
          transform: scale(1.2);
        }
      }
      a {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        white-space: nowrap;
        color: var(--dark);
        font-size: var(--fz-body);
        &:hover {
          color: var(--primary-5);
        }
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .hero {
      flex: 0 0 400px;
      display: flex;
    }
  }
`

export default Project
