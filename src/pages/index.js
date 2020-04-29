import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import "../styles/index.scss"

import Layout from "../components/layout"
import Image from "../components/myPhoto"
import SEO from "../components/seo"

const IndexPage = () => {
  const aboutMeRef = useRef(null)
  useEffect(() => {
    initFunc()
  }, [])
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
    <Layout>
      <SEO title="Home" />
      <section id="about-me">
        <div className="about-me__container">
          <div className="about-me__content-container">
            <div className="text-container">
              <h1 ref={aboutMeRef} className="name">
                Paul Puga
              </h1>
              <p className="little-extract">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tempus urna et pharetra pharetra massa massa ultricies mi.
                Habitasse platea dictumst quisque sagittis purus.
              </p>
            </div>
            <div className="photo-container">
              <Image />
            </div>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh" }}></section>
    </Layout>
  )
}

export default IndexPage
