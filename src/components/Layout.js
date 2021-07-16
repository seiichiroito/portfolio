import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

export const LocationContext = React.createContext("")

const Layout = ({ children, location }) => {
  // console.log(location.pathname)
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(prevValue => !prevValue)
  }
  return (
    <LocationContext.Provider value={location.pathname}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
      <Footer />
    </LocationContext.Provider>
  )
}

export default Layout
