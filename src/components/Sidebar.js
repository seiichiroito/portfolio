"use client"

import React from "react"
import styled from "styled-components"
import { FaTimesCircle } from "react-icons/fa"
import NavLinks from "../constants/navLinks"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const panel = React.useRef(null)
  const closeButton = React.useRef(null)
  React.useEffect(() => {
    if (!isOpen) return
    const opener = document.activeElement
    // Visibility changes with the opening transition. Focus after it is painted.
    let focusFrame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => closeButton.current?.focus())
    })
    const handleKey = event => {
      if (event.key === "Escape") {
        event.preventDefault()
        toggleSidebar()
      } else if (event.key === "Tab") {
        const controls = panel.current.querySelectorAll("button, a[href]")
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (!panel.current.contains(document.activeElement)) {
          event.preventDefault()
          ;(event.shiftKey ? last : first).focus()
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener("keydown", handleKey)
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus()
    }
  }, [isOpen, toggleSidebar])
  return (
    <Wrapper
      ref={panel}
      id="mobile-navigation"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal={isOpen ? true : undefined}
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`${isOpen ? "show-sidebar" : ""}`}
    >
      <button ref={closeButton} type="button" className="close-icon" onClick={toggleSidebar} aria-label="Close menu">
        <FaTimesCircle aria-hidden="true" />
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
  visibility: hidden;
  transition: var(--transition);
  transform: translateX(-100%);

  /* Child */
  display: flex;
  justify-content: center;
  align-items: center;
  &.show-sidebar {
    opacity: 1;
    visibility: visible;
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
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 4px;
    }
  }
  @media (min-width: 768px) {
    display: none;
    &.show-sidebar {
      transform: translateX(-100%);
    }
  }
`
export default Sidebar
