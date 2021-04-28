import React from "react"
import styled from "styled-components"

import Underline from "../utils/Underline"

const H1 = ({ children }) => {
  return <h1>{children}</h1>
}
const H2 = ({ children }) => {
  return (
    <HeadingTwo>
      <h2 className="mt-8">{children}</h2>
      <Underline styleClass="mt-1" />
    </HeadingTwo>
  )
}

const H3 = ({ children }) => {
  return <h3>{children}</h3>
}

const HeadingTwo = styled.div`
  font-size: var(--fz-heading-4);
  font-weight: bold;
`
export { H1, H2, H3 }
