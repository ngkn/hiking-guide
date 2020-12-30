import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className={"layout"}>
      <Header />
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
