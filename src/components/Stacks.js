import React from "react"
import styled from "styled-components"

import SectionHeading from "./utils/SectionHeading"
import Stack from "./Stack"
import stackData from "../constants/stacks"

const Stacks = () => {
  return (
    <Wrapper>
      <div className="container stacks__container">
        <SectionHeading title="Stack" />
        <ul>
          {stackData.map(stack => (
            <Stack key={stack.id} stack={stack} />
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
  .stacks__container {
    padding: 3rem 0;
  }
  ul {
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

export default Stacks
