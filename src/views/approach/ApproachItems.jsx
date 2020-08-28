import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./ApproachItems.scss"

export default function ApproachItems(props) {
  return (
    <section className="process pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Process Sets Us Apart
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Sentence about our process. <br /> Sentence about our process.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="items">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="item">
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4>
                  <span className="number">/01</span> First Step
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="item">
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4>
                  <span className="number">/02</span> Second Step
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="item">
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4>
                  <span className="number">/03</span> Third Step
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="item">
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4>
                  <span className="number">/04</span> Fourth Step
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
    </section>
  )
}
