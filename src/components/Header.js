import React from "react"
import Logo from "./svg/Logo"
import SvgAccount from "./svg/Account"

const Header = () => {
  return (
    <header className={"header"}>
      <div className={"burger-menu"}>
        <div className={"burger-menu__line"} />
        <div className={"burger-menu__line"} />
        <div className={"burger-menu__line"} />
      </div>

      <div className={"logo"}>
        <Logo />
      </div>

      <nav className={"nav"}>
        <ul className={"nav__list"}>
          <li className={"nav__item"}>
            <a className="nav__link" href="#">
              Equipment
            </a>
          </li>
          <li className={"nav__item"}>
            <a className="nav__link" href="#">
              About us
            </a>
          </li>
          <li className={"nav__item"}>
            <a className="nav__link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className={"account"}>
        <a href="#" className={"account__link"}>
          <div className={"account__svg"}>
            <SvgAccount />
          </div>
          <span className={"account__text"}>Account</span>
        </a>
      </div>
    </header>
  )
}

export default Header
