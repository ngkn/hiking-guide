import React, { useState } from "react"
import Logo from "components/svg/Logo"
import SvgAccount from "components/svg/Account"

import BurgerMenu from "components/svg/BurgerMenu"

// Sidebar is here to avoid the re-render of Layout's elements each time we open/close it
import Sidebar from "components/Sidebar"
import Arrow from "./svg/Arrow"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickOpenSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = (close) => {
    setShowSidebar(close)
  }

  return (
    <header>
      <div className="bgs-images">
        <div className="hg" />
        <div className="mg" />
        <div className="gradient-bgs" />
      </div>
      <div className="vg" />

      <div className="gradient" />
      <div className="menu">
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
      </div>
      <div className="titles-wrapper">
        <div className="titles">
          <div className="titles__guide">
            <hr className={`titles__line `} />
            <div>A Hiking guide</div>
          </div>
          <h1 className="titles__main">
            Be prepared for the Mountains and beyond!
          </h1>
          <div className="titles__scroll">
            <div className="titles__scroll-text">scroll down</div>
            <div className="titles__svg">
              <Arrow color={"white"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
