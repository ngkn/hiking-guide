import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

import infos from "config/infos"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className={"layout"}>
      <Header />
      <Sidebar sidebarLinks={infos.sidebarLinks} />
      <main>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child, {}) : null
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
