"use client"

import React, { useState } from "react"
import styled from "styled-components"

import { sendForm } from "@/lib/contactForm.mjs"

const FORM_ACTION = "https://formspree.io/f/mqkwkjwo"

const Contact = () => {
  const [status, setStatus] = useState("idle")

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("sending")
    const result = await sendForm(form.action, new FormData(form))
    if (result === "sent") form.reset()
    setStatus(result)
  }

  return (
    <Wrapper>
      <div className="container contact__container mt-8">
        <div className="contact p-4">
          <header className="header">
            <h3>Contact me</h3>
          </header>
          <form
            action={FORM_ACTION}
            method="POST"
            className="form mt-8"
            onSubmit={handleSubmit}
          >
            <label className="mx-4 mt-4" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className="mx-4 mt-1 p-2"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
            <label className="mx-4 mt-4" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className="mx-4 mt-1 p-2"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <label className="mx-4 mt-4" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              className="mx-4 mt-1 p-2"
              required
            ></textarea>
            <button
              className="m-4 py-3"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
            <p className="status mx-4" role="status" aria-live="polite">
              {status === "sent" &&
                "Thanks! Your message was sent. I'll reply within 2–3 days."}
              {status === "error" &&
                "Sorry, your message couldn't be sent. Please try again."}
            </p>
          </form>
          <footer className="footer m-4">
            <p>* I'll respond within 2–3 days.</p>
            <p>* You can also use the social links below.</p>
            <p>
              * I use <a href="https://formspree.io/">Formspree</a> for this
              form.
            </p>
          </footer>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - var(--h-header) - var(--h-footer));
  background-color: var(--page);
  display: flex;
  .contact__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact {
    flex: 1;
    max-width: 560px;
    background-color: var(--card);
    box-shadow: var(--light-shadow);
  }
  .header {
    text-align: center;
    h3 {
      font-size: var(--fz-heading-3);
      color: var(--ink);
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    label {
      color: var(--ink);
      font-size: var(--fz-paragraph);
    }
    input,
    textarea {
      border: 1px solid var(--light);
    }
    .status {
      color: var(--ink);
      font-size: var(--fz-paragraph);
      line-height: var(--lh-paragraph);
      &:empty {
        display: none;
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
      &:disabled {
        opacity: 0.6;
        cursor: wait;
      }
    }
  }
  .footer {
    p {
      color: var(--ink);
      font-size: var(--fz-paragraph);
      line-height: var(--lh-paragraph);
      a {
        color: var(--accent-ink);
      }
    }
  }
`

export default Contact
