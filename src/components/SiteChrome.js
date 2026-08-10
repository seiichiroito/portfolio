"use client"

import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const SiteChrome = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(prevValue => !prevValue)
  }
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default SiteChrome
