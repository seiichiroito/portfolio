"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import Navlinks from "../constants/navLinks"
import { CgMenuRound } from "react-icons/cg"

import logo from "../assets/images/logo.png"

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <Wrapper>
      <div className="container header-container">
        <Link href="/" className="logo">
          <Image src={logo} alt="logo" className="m-1" />
        </Link>
        <button
          type="button"
          className="header-menu"
          onClick={toggleSidebar}
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <CgMenuRound aria-hidden="true" />
        </button>
        <Navlinks styleClass="header-links" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  z-index: 5;

  /* Size */
  height: var(--h-header);
  width: 100%;

  /* Color */
  background-color: var(--dark);
  box-shadow: var(--section-shadow);

  .header-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 3rem;
    img {
      width: 100%;
      height: auto;
    }
  }

  .header-menu {
    /* position */
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
    font-size: 2rem;
    color: var(--light);
    background: transparent;
    border: 0;
    padding: 0;
    line-height: 0;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 4px;
    }
  }
`

export default Header
