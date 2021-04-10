import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <Wrapper>
      <SocialLinks />
      <p>Copyright © 2021 Seiichiro All Right Reserved.</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Size */
  height: var(--h-footer);
  /* Color */
  background-color: #d9d9d9;

  /* Child */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: var(--fz-paragraph);
  }
`

export default Footer
