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

      <div className={"logo-main"}>
        <Logo />
      </div>

      <div className={"header-account"}>
        <div className={"header-account__svg"}>
          <SvgAccount />
        </div>
        {/* <span>Account</span> */}
      </div>
    </header>
  )
}

export default Header
