import React from "react"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import AboutMe from "../sections/AboutMe"
import Knowledge from "../sections/Knowledge"
import Projects from "../sections/Projects"
import ContactMe from "../sections/ContactMe"

const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Knowledge />
      <Projects />
      <ContactMe />
    </Layout>
  )
}

export default IndexPage
