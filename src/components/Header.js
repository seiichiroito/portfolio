import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Navlinks from "../constants/navLinks"
import { CgMenuRound } from "react-icons/cg"
import { Link } from "gatsby"

const Header = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="container header-container">
        <Link to="/" className="logo">
          <StaticImage src="../assets/images/logo.png" alt="logo" />
        </Link>
        <CgMenuRound className="header-menu" onClick={toggleSidebar} />
        <Navlinks styleClass="header-links" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* Position */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  /* Size */
  height: var(--h-header);
  width: 100%;

  /* Color */
  background-color: var(--dark);
  box-shadow: var(--dark-shadow);

  .header-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 3rem;
    padding: 0.5rem;
  }

  .header-menu {
    /* position */
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
    font-size: 2rem;
    color: var(--light);
  }
`

export default Header
