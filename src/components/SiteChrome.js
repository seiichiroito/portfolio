"use client"

import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const SiteChrome = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = React.useCallback(() => {
    setIsOpen(prevValue => !prevValue)
  }, [])
  React.useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])
  return (
    <>
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default SiteChrome
