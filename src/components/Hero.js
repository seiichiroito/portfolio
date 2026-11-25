"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

import Underline from "./utils/Underline"
import SocialLinks from "../constants/socialLinks"

import avatar from "../assets/images/avatar.png"

const Hero = () => {
  return (
    <Wrapper>
      <div className="container hero__container px-8">
        <div className="main">
          <div className="avatar">
            <Image src={avatar} alt="avatar" className="avatar-icon" priority />
            <Underline styleClass="mt-4" />
          </div>
          <div className="header">
            <h1>I'm Seiichiro</h1>
            <p className="mt-1">Web Developer</p>
          </div>
          <SocialLinks styleClass="mt-2" />
          <div className="cta mt-6">
            <a className="btn" href="#works">
              See works
            </a>
            <Link className="btn ghost" href="/contact">
              Contact
            </Link>
          </div>
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
  min-height: 26rem;
  padding: 3rem 0;
  overflow: hidden;

  /* Color */
  background-color: var(--white);

  /* Child */
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    min-height: clamp(26rem, 55vh, 34rem);
  }
  .cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.5rem 1.25rem;
    border: 2px solid var(--primary-5);
    border-radius: var(--radius);
    background-color: var(--primary-5);
    color: var(--white);
    font-size: var(--fz-body);
    text-decoration: none;
    transition: var(--transition);
    &:hover {
      background-color: var(--primary-6);
      border-color: var(--primary-6);
    }
    &:focus-visible {
      outline: 2px solid var(--primary-5);
      outline-offset: 3px;
    }
    &.ghost {
      background-color: transparent;
      color: var(--primary-5);
      &:hover {
        background-color: var(--primary-1);
      }
    }
  }
  .hero__container {
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: 3fr 1fr;
    }
  }
  .avatar-icon {
    width: 4rem;
    height: 4rem;
  }
  .header {
    h1 {
      font-size: var(--fz-heading-1);
      line-height: var(--lh-heading);
    }
    p {
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
