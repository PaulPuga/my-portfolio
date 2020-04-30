import React, { useEffect, useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

// import SEO from "../../components/seo"
import techs from "./techs-knowledge.json"

const TechCard = ({ delay, color, title, desc, icon }) => {
  return (
    <div
      className="tech-card-container"
      data-sal="flip-up"
      data-sal-delay={delay}
      data-sal-easing="ease-in-out"
    >
      <div className="tech-card-box">
        <div
          className="tech-card-circle-logo"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div className="tech-card-info-container">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

const Knowledge = () => {
  useEffect(() => {}, [])

  const data = useStaticQuery(graphql`
    query {
      i1: file(relativePath: { eq: "icon-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      i2: file(relativePath: { eq: "icon-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      i3: file(relativePath: { eq: "icon-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i4: file(relativePath: { eq: "icon-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i5: file(relativePath: { eq: "icon-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i6: file(relativePath: { eq: "icon-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i7: file(relativePath: { eq: "icon-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i8: file(relativePath: { eq: "icon-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i9: file(relativePath: { eq: "icon-9.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i10: file(relativePath: { eq: "icon-10.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i11: file(relativePath: { eq: "icon-11.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i12: file(relativePath: { eq: "icon-12.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i13: file(relativePath: { eq: "icon-13.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i14: file(relativePath: { eq: "icon-14.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i15: file(relativePath: { eq: "icon-15.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i16: file(relativePath: { eq: "icon-16.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i17: file(relativePath: { eq: "icon-17.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      i18: file(relativePath: { eq: "icon-18.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let delayDiff = 0
  let imagesList = []
  const init = () => {
    for (const el in data) {
      imagesList = [...imagesList, data[el]]
    }
  }
  init()
  console.log(imagesList[0].childImageSharp.fluid)
  return (
    <React.Fragment>
      {/* <SEO title="Home" /> */}
      <section id="knowledge">
        <div className="knowledge__cards-container">
          {techs.data.map((el, i) => {
            delayDiff = delayDiff + 100
            return (
              <TechCard
                key={i}
                delay={200}
                color={el.color}
                title={el.title}
                desc={el.experience}
                icon={<Img fluid={imagesList[i].childImageSharp.fluid} />}
              />
            )
          })}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Knowledge
