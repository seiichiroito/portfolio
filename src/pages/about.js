import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Underline from "../components/utils/Underline"

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="container about__container">
          <div className="center">
            <div className="avatar">
              <StaticImage
                src="../assets/images/avatar.png"
                alt="avatar"
                className="avatar-icon"
              />
            </div>
            <div className="main">
              <h3>About Me</h3>
              <Underline />
              <p>
                i'm a university student who like to think about things that
                aren't focused generally.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  display: flex;
  .about__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .avatar {
    text-align: center;
  }
  .avatar-icon {
    width: 240px;
  }

  .main {
    color: var(--dark);
    margin-top: 2rem;
    h3 {
      font-size: var(--fz-heading-3);
      line-height: var(--lh-heading);
    }
    p {
      margin-top: 1.5rem;
      font-size: var(--fz-paragraph);
      line-height: var(--lh-paragraph);
    }
    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 60px;
    }
  }
`

export default About
