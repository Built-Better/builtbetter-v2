import React from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./ToolkitGrid.scss"

ToolkitGrid.propTypes = {
  images: PropTypes.array,
}

ToolkitGrid.defaultProps = {
  images: [],
}

export default function ToolkitGrid(props) {
  return (
    <section className="toolkit-grid pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Toolkit
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              {props.titleOne} <br /> {props.titleTwo}
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="grid">
        {props.images.map((image, index) => {
          return (
            <div className="img-container" key={index}>
              <div className="overlay"></div>
              <VisibilitySensor once partialVisibility={true}>
                {({ isVisible }) => (
                  <img
                    src={image}
                    alt={`tookit item ${index}`}
                    className={isVisible ? "slideUp enter" : "slideUp"}
                  />
                )}
              </VisibilitySensor>
            </div>
          )
        })}
      </div>
    </section>
  )
}
