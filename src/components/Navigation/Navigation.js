import PropTypes from "prop-types"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      sn1: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sn2: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sn3: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid(fit: FILL) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header id="main-header" className="header">
      <div className="header__content">
        <nav className="header__links-nav">
          <ul>
            <li
              id="nav-index-about-me"
              className="selected"
              onClick={e => scrollTo("#about-me")}
            >
              <a className="link">ABOUT ME</a>
            </li>
            <li id="nav-index-knowledge" onClick={e => scrollTo("#knowledge")}>
              <a className="link">KNOWLEDGE</a>
            </li>
            <li id="nav-index-projects" onClick={e => scrollTo("#projects")}>
              <a className="link">PROJECTS</a>
            </li>
            <li
              id="nav-index-contact-me"
              onClick={e => scrollTo("#contact-me")}
            >
              <a className="link">CONTACT ME</a>
            </li>
          </ul>
        </nav>
        <div className="header__social-networks-container">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://mx.linkedin.com/in/paul-puga-6451b5187"
                className="nav__image-wrapper"
              >
                <Img
                  className="social-network-link-image"
                  fluid={data.sn1.childImageSharp.fluid}
                />
              </a>
            </li>
            <li>
              <a href="mailto:puga.540.puga@gmail.com" className="nav__image-wrapper">
                <Img
                  className="social-network-link-image"
                  fluid={data.sn2.childImageSharp.fluid}
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/paul_f_puga/"
                className="nav__image-wrapper"
              >
                <Img
                  className="social-network-link-image"
                  fluid={data.sn3.childImageSharp.fluid}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
