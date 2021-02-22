import React from "react"

import Logo from "components/svg/Logo"
import infos from "config/infos"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo-text">
          <i className="logo">
            <Logo />
          </i>
          <p className="footer-text">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <div className="copyright">
            Copyright 2021 MNTN, Inc. Terms & Privacy
            <br />A concept by Kryston Schwarze
            <br /> Developed by&nbsp;
            <a className="author-name" href="https://github.com/ngkn">
              Nathanael Ngouayeke
            </a>
          </div>
        </div>
        <div className="footer-list">
          <div className="footer-section">
            <h3 className="footer-title">More on the blog</h3>
            <nav className="footer-nav">
              <ul className="footer-links-container">
                {infos.footerBlogLinks.map((link) => (
                  <li key={link.title} className="footer-link">
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">More on MNTN</h3>
            <nav className="footer-nav">
              <ul className="footer-links-container">
                {infos.footerMoreInfoLinks.map((link) => (
                  <li key={link.title} className="footer-link">
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
