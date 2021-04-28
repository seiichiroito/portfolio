import React from "react"
import styled from "styled-components"

const Ul = ({ children }) => {
  return <UlWrapper className="mt-3">{children}</UlWrapper>
}

const Li = ({ children }) => {
  return <LiWrapper className="mt-8">{children}</LiWrapper>
}

const UlWrapper = styled.ul`
  list-style: inside;
`

const LiWrapper = styled.li`
  font-size: var(--fz-heading-5);
`

export { Ul, Li }
