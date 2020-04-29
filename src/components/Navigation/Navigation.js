import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"

const Header = ({ siteTitle }) => (
  <header id="main-header" className="header">
    <div className="header__content">
      <nav className="header__links-nav">
        <ul>
          <li><Link className="link">ABOUT ME</Link></li>
          <li><Link className="link">KNOWLEDGE</Link></li>
          <li><Link className="link">PROJECTS</Link></li>
          <li><Link className="link">CONTACT ME</Link></li>
        </ul>
      </nav>
      <div className="header__social-networks-container">
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
