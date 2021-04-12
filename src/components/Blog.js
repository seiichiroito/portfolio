import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Blog = ({ blog }) => {
  const { title, description, categories, publishedAt, image } = blog
  const gatsbyImage = getImage(image)

  return (
    <Wrapper>
      <Link to="/" className="blog-link">
        <div className="hero">
          <GatsbyImage image={gatsbyImage} alt={title} />
        </div>
        <aside>
          <div className="main">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div className="footer">
            <ul className="categories">
              {categories.map((category, index) => {
                return <li key={index}>{category}</li>
              })}
            </ul>
            <p className="date">{publishedAt}</p>
          </div>
        </aside>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: flex;
  .blog-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      transform: scale(1.02);
    }
  }
  box-shadow: var(--dark-shadow);
  border-radius: var(--radius);
  .hero {
    height: 200px;
    display: flex;
  }
  aside {
    padding: 1.5rem;
    flex: 1;
    background-color: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main {
    color: var(--dark);

    h5 {
      line-height: var(--lh-heading);
      font-size: var(--fz-heading-5);
      margin-left: -0.25em;
    }
    p {
      margin-top: 1rem;
      font-size: var(--fz-body);
      line-height: var(--lh-paragraph);
    }
  }
  .footer {
    color: var(--primary-5);
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .categories {
      display: flex;
      gap: 1rem;
      li {
        border: 1px solid var(--primary-5);
        border-radius: var(--radius);
        padding: 0.25rem;
        color: var(--primary-5);
        font-size: var(--fz-paragraph);
        &:hover {
          color: var(--light);
          background-color: var(--primary-5);
        }
      }
    }
  }
`
export default Blog
