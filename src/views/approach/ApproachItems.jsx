import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"
import Collapsible from "../../components/Collapsible"

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

      <div className="cols">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="summary">
              <p className={isVisible ? "slideUp enter" : "slideUp"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          )}
        </VisibilitySensor>

        <div className="collapsibles">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <Collapsible
                  html={true}
                  question={`<span>/01</span>&nbsp;&nbsp;Discovery`}
                  answer="nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
                />
                <Collapsible
                  html={true}
                  question={`<span>/02</span>&nbsp;&nbsp;Strategy`}
                  answer="nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
                />
                <Collapsible
                  html={true}
                  question={`<span>/03</span>&nbsp;&nbsp;Creative`}
                  answer="nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
                />
                <Collapsible
                  html={true}
                  question={`<span>/04</span>&nbsp;&nbsp;Development`}
                  answer="nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
                />
                <Collapsible
                  html={true}
                  question={`<span>/05</span>&nbsp;&nbsp;Hand-Off`}
                  answer="nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet."
                />
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}
