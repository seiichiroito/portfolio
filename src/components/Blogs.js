import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SectionHeading from "./utils/SectionHeading"
import Blog from "./Blog"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Wrapper>
      <div className="container blogs__container">
        <SectionHeading title={title} />
        {blogs.length == 0 ? (
          <p className="no-entry">There is no entry yet.</p>
        ) : (
          <ul className="blog-list">
            {blogs.map(blog => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        )}
        {showLink && (
          <Link className="blogs-btn" to="/blog">
            Blog
          </Link>
        )}
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
  .blogs__container {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
  }
  .no-entry {
    color: var(--light);
    line-height: var(--lh-paragraph);
    font-size: var(--fz-paragraph);
    margin: 2rem 0;
  }

  .blog-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 2rem 0;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .blogs-btn {
    color: var(--primary-5);
    background-color: var(--light);
    padding: 0.8rem 1rem;
    text-decoration: none;
    font-size: var(--fz-body);
    margin: 0 auto;
    &:hover {
      transform: scale(1.02);
    }
  }
`

export default Blogs
