import React, { useEffect, useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"
import "./style.scss"
import ModalImagePreview from "../../components/ModalImagePreview"
import projects from "./projects.json"

// import SEO from "../../components/seo"

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 6000,
  dotsClass: "slick-dots slick-thumb",
  customPaging: function (i) {
    return <div className="project-pagination-dot"></div>
  },
  pauseOnHover: true,
}

const Image = ({ fluid, handleClick }) => {
  return (
    <div className="image-wrapper" onClick={handleClick}>
      <Img className="gatsby-image" fluid={fluid} />
    </div>
  )
}

const Project = ({ data, images }) => {
  return (
    <div className="projects__project-component">
      <div className="information-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <h3>Technologies implemented</h3>
        <div className="chips-container">
          {data.techs.map((el, index) => {
            return (
              <div className="projects__chip" key={index}>
                <label>
                  <span>{el}</span>
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="carouser-container">
        {/* <div className="image-wrapper">
          <Img
            className="gatsby-image"
            fluid={data.dummyProject.childImageSharp.fluid}
          />
        </div> */}
        {images}
      </div>
    </div>
  )
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      dummyProject: file(relativePath: { eq: "dummy-project.png" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [openImagePreview, setOpenImagePreview] = useState(false)
  const [imageFluidPreview, setImageFluidPreview] = useState(null)
  console.log(projects)
  return (
    <React.Fragment>
      {/* <SEO title="Home" /> */}
      <section id="projects">
        {openImagePreview && (
          <ModalImagePreview
            fluid={imageFluidPreview}
            handleClose={e => setOpenImagePreview(false)}
          />
        )}
        <div className="projects__container">
          <div className="projects__main-content">
            <Slider {...settings}>
              {projects.data.map((el, index) => {
                return (
                  <Project
                    key={index}
                    data={el}
                    images={
                      <React.Fragment>
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                        <Image
                          fluid={data.dummyProject.childImageSharp.fluid}
                          handleClick={e => {
                            setImageFluidPreview(
                              data.dummyProject.childImageSharp.fluid
                            )
                            setOpenImagePreview(true)
                          }}
                        />
                      </React.Fragment>
                    }
                  />
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Projects
