import React from "react"
import styled from "styled-components"

const Underline = ({ styleClass }) => {
  return <Wrapper className={styleClass}></Wrapper>
}

const Wrapper = styled.div`
  width: 3rem;
  height: 0.2rem;
  background-color: var(--primary-5);
`

export default Underline
