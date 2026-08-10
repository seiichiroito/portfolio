"use client"

import React from "react"
import styled from "styled-components"

import Projects from "../Projects"

const AllProjects = ({ projects }) => {
  return (
    <Wrapper>
      <div className="container">
        <Projects projects={projects} title="All Projects" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--white);
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
`

export default AllProjects
