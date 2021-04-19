import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SectionHeading from "./utils/SectionHeading"
import Blog from "./Blog"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Wrapper>
      <div className="container blogs__container py-5">
        <SectionHeading title={title} />
        {blogs.length == 0 ? (
          <p className="no-entry my-4">There is no entry yet.</p>
        ) : (
          <ul className="blog-list my-4">
            {blogs.map(blog => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        )}
        {showLink && (
          <div className="blogs-btn">
            <Link className="mx-auto py-2 px-3" to="/blog">
              Blog
            </Link>
          </div>
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

  .no-entry {
    color: var(--light);
    line-height: var(--lh-paragraph);
    font-size: var(--fz-paragraph);
  }

  .blog-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .blogs-btn {
    display: flex;
    a {
      color: var(--primary-5);
      background-color: var(--light);
      text-decoration: none;
      font-size: var(--fz-body);
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`

export default Blogs
