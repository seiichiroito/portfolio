import React from "react"
import styled from "styled-components"

const Hero = () => {
  return <Wrapper>hero</Wrapper>
}

const Wrapper = styled.section`
  /* Position */
  margin-top: var(--h-header);

  /* Size */
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
`
export default Hero
