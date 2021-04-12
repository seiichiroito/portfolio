import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="container contact__container">
          <div className="contact">
            <header className="header">
              <h3>Contact me</h3>
            </header>
            <form
              action="https://formspree.io/f/mqkwkjwo"
              method="POST"
              className="form"
            >
              <input type="text" placeholder="name" name="name" />
              <input type="email" placeholder="email" name="email" />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
            <footer className="footer">
              <p>
                * I use <a href="https://formspree.io/">Formspress</a> for this
                form.
              </p>
              <p>* I'll response to a given email within 2 ~ 3 days.</p>
            </footer>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--light);
  display: flex;
  .contact__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact {
    flex: 1;
    max-width: 560px;
    background-color: var(--white);
    padding: 1rem;
  }
  .header {
    text-align: center;
    h3 {
      font-size: var(--fz-heading-3);
      color: var(--dark);
    }
  }
  .form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    input,
    textarea {
      margin: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--light);
      &::placeholder {
        color: var(--dark);
        opacity: 0.5;
      }
    }
    button {
      margin: 1rem;
      color: var(--white);
      background-color: var(--primary-5);
      padding: 1rem 0;
      border: none;
      &:hover {
        color: var(--white);
        background-color: var(--primary-7);
      }
    }
  }
  .footer {
    padding: 1rem;
    p {
      color: var(--dark);
      font-size: var(--fz-paragraph);
      line-height: var(--lh-paragraph);
      a {
        color: var(--primary-5);
      }
    }
  }
`

export default Contact
