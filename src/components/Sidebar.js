import React from "react"

import Close from "components/svg/Close"
import Portal from "components/Portal"
import infos from "config/infos"

import PropTypes from "prop-types"

const Sidebar = ({ showSidebar, closeSidebar }) => {
  const classNameIconClose = showSidebar ? "sidebar sidebar--open" : "sidebar"
  const classNameBackdrop = showSidebar ? "backdrop backdrop--open" : "backdrop"

  const handleClickCloseSidebar = () => {
    closeSidebar && closeSidebar(false)
  }

  return (
    <Portal>
      <div className={classNameBackdrop} onClick={handleClickCloseSidebar} />
      <div className={classNameIconClose}>
        <div className="sidebar__icon-close" onClick={handleClickCloseSidebar}>
          <Close />
        </div>
        <ul className="sidebar__list">
          {infos.sidebarLinks.map((sidebarLink) => (
            <li key={sidebarLink.title} className="sidebar__link">
              {sidebarLink.title}
            </li>
          ))}
        </ul>
      </div>
    </Portal>
  )
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}

export default Sidebar
