/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navigation from "./Navigation"

const Layout = ({ children }) => {
  React.useEffect(() => {
    colorizeCurrentSection()
  }, [])
  const colorizeCurrentSection = () => {
    const aboutMeSection = document.getElementById("about-me")
    const knowledgeSection = document.getElementById("knowledge")
    const projectsSection = document.getElementById("projects")
    const contactSection = document.getElementById("contact-me")
    const distanceAboutMeHeight = aboutMeSection.getBoundingClientRect().height
    const distanceKnowledgeToTop = knowledgeSection.getBoundingClientRect().top
    const distanceProjectsToTop = projectsSection.getBoundingClientRect().top
    const distanceContactToTop = contactSection.getBoundingClientRect().top
    window.addEventListener("scroll", e => {
      if (window.scrollY < distanceAboutMeHeight - 200) {
        document.getElementById("nav-index-about-me").classList.add("selected")
      } else {
        document
          .getElementById("nav-index-about-me")
          .classList.remove("selected")
      }
      if (
        window.scrollY > distanceKnowledgeToTop - 200 &&
        window.scrollY < distanceProjectsToTop - 200
      ) {
        document.getElementById("nav-index-knowledge").classList.add("selected")
      } else {
        document
          .getElementById("nav-index-knowledge")
          .classList.remove("selected")
      }
      if (
        window.scrollY > distanceProjectsToTop - 200 &&
        window.scrollY < distanceContactToTop - 200
      ) {
        document.getElementById("nav-index-projects").classList.add("selected")
      } else {
        document
          .getElementById("nav-index-projects")
          .classList.remove("selected")
      }
      if (window.scrollY > distanceContactToTop - 200) {
        document
          .getElementById("nav-index-contact-me")
          .classList.add("selected")
      } else {
        document
          .getElementById("nav-index-contact-me")
          .classList.remove("selected")
      }
    })
  }
  return (
    <div className="layout__container">
      <Navigation />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
