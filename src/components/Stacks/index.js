import React from "react"
import styled from "styled-components"

import SectionHeading from "../utils/SectionHeading"
import Stack from "./Stack"
import stackData from "../../constants/stackData"

const Stacks = () => {
  return (
    <Wrapper>
      <div className="container stacks__container py-5">
        <SectionHeading title="Stack" />
        <ul className="my-4">
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
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`

export default Stacks
