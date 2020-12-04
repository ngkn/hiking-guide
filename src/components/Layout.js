import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, {}) : null
      )}
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
