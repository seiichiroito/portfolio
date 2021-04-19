import React from "react"
import styled from "styled-components"
import { FaTimesCircle } from "react-icons/fa"
import NavLinks from "../constants/navLinks"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <Wrapper className={`${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-icon" onClick={toggleSidebar}>
        <FaTimesCircle />
      </button>
      <div className="sidebar-container">
        <NavLinks
          styleClass={`${isOpen ? "sidebar-links" : ""}`}
          toggleSidebar={toggleSidebar}
        />
        <SocialLinks styleClass={`${isOpen ? "sidebar-links mt-3" : ""}`} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: var(--light);
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);

  /* Child */
  display: flex;
  justify-content: center;
  align-items: center;
  &.show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .close-icon {
    position: absolute;
    right: 2rem;
    top: 1.3rem;
    font-size: var(--fz-heading-4);
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    outline: none;
  }
  @media (min-width: 768px) {
    &.show-sidebar {
      transform: translateX(-100%);
    }
  }
`
export default Sidebar
