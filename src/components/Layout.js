import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child, {}) : null
        )}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
