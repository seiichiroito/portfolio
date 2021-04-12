import React from "react"
import styled from "styled-components"
import SectionHeading from "./utils/SectionHeading"
import Blog from "./Blog"

const Blogs = ({ blogs }) => {
  return (
    <Wrapper>
      <div className="container blogs__container">
        <SectionHeading title="Latest Blog" />
        <ul className="blog-list">
          {blogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </ul>
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
`

export default Blogs
