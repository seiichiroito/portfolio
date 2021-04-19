import React from "react"
import styled from "styled-components"
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = ({ project, index }) => {
  const gatsbyImage = getImage(project.image)

  return (
    <Wrapper>
      <div className="hero">
        <GatsbyImage image={gatsbyImage} alt={project.title} />
      </div>
      <aside className="p-4">
        <div className="main">
          <h5>
            {index + 1}. {project.title}
          </h5>
          <p className="mt-3">{project.description}</p>
        </div>
        <div className="footer mt-3">
          <ul className="tags">
            {project.tags.map((tag, index) => {
              return (
                <li className="p-1" key={index}>
                  {tag}
                </li>
              )
            })}
          </ul>
          <ul className="links">
            <li>
              <a
                href={project.github}
                target="__blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href={project.url} target="__blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
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
    justify-content: space-between;
    align-items: center;
    .tags {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      li {
        border: 1px solid var(--primary-5);
        border-radius: var(--radius);
        color: var(--primary-5);
        font-size: var(--fz-paragraph);
      }
    }
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
        color: var(--dark);
        font-size: var(--fz-heading-6);
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
