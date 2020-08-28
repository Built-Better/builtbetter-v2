import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Story.scss"
import Image1 from "../../images/about/story-1.jpg"
import Image2 from "../../images/about/story-2.jpg"
import Image3 from "../../images/about/story-3.jpg"

export default function Story(props) {
  return (
    <section className="story pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Story
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              A few sentances about this section. <br /> A few sentances about
              this section.
            </h2>
          </>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <p className={isVisible ? "slideUp enter" : "slideUp"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        )}
      </VisibilitySensor>
      <div className="images">
        <div className="img-container">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <img
                className={isVisible ? "slideUp enter" : "slideUp"}
                src={Image1}
                alt="About us one"
              />
            )}
          </VisibilitySensor>
        </div>
        <div className="divider"></div>
        <div className="img-container">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <img
                className={isVisible ? "slideUp enter" : "slideUp"}
                src={Image2}
                alt="About us two"
              />
            )}
          </VisibilitySensor>
        </div>
        <div className="divider"></div>
        <div className="img-container">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <img
                className={isVisible ? "slideUp enter" : "slideUp"}
                src={Image3}
                alt="About us three"
              />
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}
