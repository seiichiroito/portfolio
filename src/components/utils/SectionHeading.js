import React from "react"
import styled from "styled-components"

import Underline from "./Underline"

const SectionHeading = ({ title, dark }) => {
  return (
    <>
      <Heading dark={dark}>{title}</Heading>
      <Underline />
    </>
  )
}

const Heading = styled.h4`
  font-size: var(--fz-heading-4);
  color: ${props => (props.dark ? `var(--dark)` : `var(--light)`)};
  line-height: var(--lh-heading);
  font-weight: bold;
`

export default SectionHeading
