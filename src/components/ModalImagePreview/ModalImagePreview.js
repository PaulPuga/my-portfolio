import React from "react"
import "./style.scss"
import Img from "gatsby-image"
const ModalImagePreview = ({ fluid, handleClose }) => {
  return (
    <div
      className="image-preview-background"
      onClick={e => {
        if (e.target.className == "image-preview-background") {
          handleClose()
        }
      }}
    >
      <div className="image-preview-image-container">
        <Img fluid={fluid} />
      </div>
    </div>
  )
}

export default ModalImagePreview
