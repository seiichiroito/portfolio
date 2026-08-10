"use client"

import React from "react"
import styled from "styled-components"

import Blogs from "../Blogs"

const AllBlog = ({ blogs }) => {
  return (
    <Wrapper>
      <div className="container blog__container px-8">
        <Blogs blogs={blogs} title="Blog" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--dark);
  .blog__container {
    section {
      box-shadow: none;
    }
  }
`

export default AllBlog
