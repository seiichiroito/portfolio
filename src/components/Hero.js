import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Underline from "./utils/Underline"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <Wrapper>
      <div className="container hero__container">
        <div className="main">
          <div className="avatar">
            <StaticImage
              src="../assets/images/avatar.png"
              alt="avatar"
              className="avatar-icon"
            />
            <Underline />
          </div>
          <div className="header">
            <h1>I'm Seiichiro</h1>
            <p>Web Developer</p>
          </div>
          <SocialLinks />
        </div>
        <div className="sub">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Position */

  /* Size */
  min-height: calc(70vh);

  /* Color */
  background-color: var(--light);

  /* Child */
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    min-height: calc(100vh - var(--h-header) - var(--h-footer));
  }
  .hero__container {
    display: grid;
    padding: 0 2rem;
    @media (min-width: 768px) {
      grid-template-columns: 3fr 1fr;
    }
  }
  .avatar-icon {
    width: 4rem;
    height: 4rem;
    margin-bottom: 3rem;
  }
  .header {
    margin-bottom: 1rem;
    h1 {
      font-size: var(--fz-heading-1);
      line-height: var(--lh-heading);
    }
    p {
      margin-top: 0.5rem;
      font-size: var(--fz-body);
      line-height: var(--lh-body);
    }
  }
  .sub {
    display: none;
    position: relative;
    @media (min-width: 768px) {
      display: block;
    }
    div {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid var(--primary-8);
    }
    div:nth-of-type(2) {
      transform: rotate(30deg);
    }
    div:nth-of-type(3) {
      transform: rotate(60deg);
    }
    div:nth-of-type(4) {
      transform: rotate(90deg);
    }
    div:nth-of-type(5) {
      transform: rotate(120deg);
    }
  }

  /* Animation */
  .avatar-icon {
    animation-name: floating;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  .sub {
    div {
      animation-name: rotating;
      animation-duration: 60s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotating {
    50% {
      transform: rotate(360deg);
    }
  }
`
export default Hero
