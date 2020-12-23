import React from "react"

import Close from "./svg/Close"

import PropTypes from "prop-types"

const Sidebar = ({ sidebarLinks }) => {
  return (
    <div className="backdrop">
      <div className="sidebar">
        <div className="sidebar__icon-close">
          <Close />
        </div>
        <ul>
          {sidebarLinks.map((sidebarLink) => (
            <li key={sidebarLink.title} className="sidebar__link">
              {sidebarLink.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebarLinks: PropTypes.array.isRequired,
}

export default Sidebar
