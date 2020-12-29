import React, { useState, useEffect, useRef, memo } from "react"
import Logo from "./svg/Logo"
import SvgAccount from "./svg/Account"
import BurgerMenu from "./svg/BurgerMenu"

// Sidebar is here to avoid the re-render of Layout's elements each time we open/close it
import Sidebar from "../components/Sidebar"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickOpenSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = (close) => {
    setShowSidebar(close)
  }

  return (
    <header className="header">
      <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      <div className="burger-menu" onClick={handleClickOpenSidebar}>
        <i className="burger-menu__icon">
          <BurgerMenu />
        </i>
      </div>
      <i className="logo">
        <Logo />
      </i>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">
              Equipment
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              About us
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="account">
        <a href="#" className="account__link">
          <div className="account__svg">
            <SvgAccount />
          </div>
          <span className="account__text">Account</span>
        </a>
      </div>
    </header>
  )
}

export default Header
