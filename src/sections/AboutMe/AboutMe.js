import React, { useEffect, useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./style.scss"

import Image from "../../components/myPhoto"
import SEO from "../../components/seo"

const AboutMe = () => {
  const aboutMeRef = useRef(null)
  useEffect(() => {
    initFunc()
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const initFunc = () => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > aboutMeRef.current.getBoundingClientRect().top) {
        document.getElementById("main-header").classList.add("scrolled")
      } else {
        if (
          document.getElementById("main-header").classList.contains("scrolled")
        ) {
          document.getElementById("main-header").classList.remove("scrolled")
        }
      }
    })
  }
  return (
    <React.Fragment>
      <SEO title="Home" />
      <section id="about-me">
        <div className="about-me__container">
          <div className="about-me__content-container">
            <div className="text-container">
              <h1 ref={aboutMeRef} className="name">
                {data.site.siteMetadata.title}
              </h1>
              <p className="little-extract">
                {data.site.siteMetadata.description}
              </p>
            </div>
            <div className="photo-container">
              <Image />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AboutMe
