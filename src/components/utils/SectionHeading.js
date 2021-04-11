import React from "react"
import styled from "styled-components"

import Underline from "./Underline"

const SectionHeading = ({ title }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Underline />
    </>
  )
}

const Heading = styled.h4`
  font-size: var(--fz-heading-4);
  color: var(--light);
  line-height: var(--lh-heading);
`

export default SectionHeading
