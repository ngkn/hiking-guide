import React from "react"
import { createPortal } from "react-dom"

import PropTypes from "prop-types"

const Portal = ({ children }) => {
  // Referenced to a div created in index.html
  const selector = document.getElementById("portal")

  return selector ? createPortal(children, selector) : null
}

export default Portal

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}
