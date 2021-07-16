import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BiArrowBack } from "react-icons/bi"

import Layout from "../components/Layout"
const Error = ({ location }) => {
  return (
    <Layout location={location}>
      <Wrapper>
        <div className="container error__container">
          <h1>404</h1>
          <Link to="/" className="back-btn">
            <BiArrowBack />
            Back to home
          </Link>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--white);
  display: flex;
  .error__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: var(--primary-5);
    font-size: var(--fz-heading-1);
  }
  .back-btn {
    margin-top: 2rem;
    font-size: var(--fz-heading-5);
    text-decoration: none;
    border: 1px solid var(--primary-5);
    padding: 0.8rem 1rem;
    color: var(--primary-5);
    display: flex;
    align-items: center;
    &:hover {
      background-color: var(--primary-5);
      color: var(--white);
    }
  }
`

export default Error
