import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="contact"
        description="Contact form if you want to contact me"
        image="/contact.png"
      />
      <Wrapper>
        <div className="container contact__container mt-8">
          <div className="contact p-4">
            <header className="header">
              <h3>Contact me</h3>
            </header>
            <form
              action="https://formspree.io/f/mqkwkjwo"
              method="POST"
              className="form mt-8"
            >
              <input
                className="m-4 p-2"
                type="text"
                placeholder="name"
                name="name"
              />
              <input
                className="m-4 p-2"
                type="email"
                placeholder="email"
                name="email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="m-4 p-2"
              ></textarea>
              <button className="m-4 py-3" type="submit">
                Submit
              </button>
            </form>
            <footer className="footer m-4">
              <p>* I'll response to a given email within 2 ~ 3 days.</p>
              <p>* You can also contact me through below sns.</p>
              <p>
                * I use <a href="https://formspree.io/">Formspress</a> for this
                form.
              </p>
            </footer>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--white);
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
    box-shadow: var(--light-shadow);
  }
  .header {
    text-align: center;
    h3 {
      font-size: var(--fz-heading-3);
      color: var(--dark);
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      border: 1px solid var(--light);
      &::placeholder {
        color: var(--dark);
        opacity: 0.5;
      }
    }
    button {
      color: var(--white);
      background-color: var(--primary-5);
      border: none;
      &:hover {
        color: var(--white);
        background-color: var(--primary-7);
      }
    }
  }
  .footer {
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
