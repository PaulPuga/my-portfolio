import React, { useEffect, useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/myPhoto"
import SEO from "../components/seo"

import AboutMe from '../sections/AboutMe'
import Knowledge from '../sections/Knowledge'

const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Knowledge />
    </Layout>
  )
}

export default IndexPage
