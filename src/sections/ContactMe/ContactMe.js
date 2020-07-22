import React, { useEffect, useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

import SEO from "../../components/seo"

const Footer = () => {
  return <div className="footer__container"></div>
}
const Input = ({ placeholder = "", onChange, name = "" }) => {
  return (
    <div className="input__wrapper">
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
      />
    </div>
  )
}
const Button = ({ children, href }) => {
  return (
    <div className="button__wrapper">
      <a href={href}>{children}</a>
    </div>
  )
}
const TextArea = ({ placeholder, onChange, name }) => {
  return (
    <div className="text-area__wrapper">
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
      />
    </div>
  )
}

const ContactMe = () => {
  const myEmail = "puga.540.puga@gmail.com"
  const [personName, setPersonName] = useState("")
  const [personSubject, setPersonSubject] = useState("")
  const [personMessage, setPersonMessage] = useState("")
  const [href, setHref] = useState(`mailto:${myEmail}`)

  useEffect(() => {
    let mailto = `mailto:${myEmail}?subject=${encodeURIComponent(
      personSubject
    )}&body=${encodeURIComponent(personMessage)}%0A%0A%0AMessage%20by%20:%20${encodeURIComponent(personName)}`
    console.log("🟩", mailto)
    setHref(mailto)
  }, [personName, personSubject, personMessage])

  const handleSubmit = e => {
    // e.preventDefault()
    console.log(personName, personSubject, personMessage)
  }
  return (
    <React.Fragment>
      <SEO title="Home" />
      <section id="contact-me">
        <div className="contact-me__container">
          <form
            className="contact-me__form"
            action="mailto:puga@gmail.com"
            method="post"
            encType="text/plain"
          >
            <h2>LET’S TALK!</h2>
            <div className="contact-me__two-inputs-container">
              <div className="contact-me__input-wrapper  name">
                <Input
                  name="user-name"
                  placeholder="Your name"
                  onChange={e => setPersonName(e.target.value)}
                />
              </div>
              <div className="contact-me__input-wrapper subject">
                <Input
                  name="user-subject"
                  placeholder="Subject"
                  onChange={e => setPersonSubject(e.target.value)}
                />
              </div>
            </div>
            <div className="contact-me__message-container">
              <TextArea
                name="user-message"
                placeholder="Message"
                onChange={e => setPersonMessage(e.target.value)}
              />
            </div>
            <div className="contact-me__button-container">
              <div className="button-wrapper">
                <Button href={href}>
                  SEND
                </Button>
              </div>
            </div>
          </form>
          <Footer />
        </div>
      </section>
    </React.Fragment>
  )
}

export default ContactMe
