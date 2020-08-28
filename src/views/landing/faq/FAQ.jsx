import React from "react"
import VisibilitySensor from "../../../components/VisibilityCensor"

import "./FAQ.scss"
import Collapsible from "../../../components/Collapsible"

export default function FAQ(props) {
  return (
    <section className="faq pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Frequently Asked Questions
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              A few sentances abou this section <br /> Another sentance about
              this.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div>
            <div className={isVisible ? "slideUp enter" : "slideUp"}>
              <Collapsible
                question="How much does a website cost?"
                answer="A lot, probably"
              />
              <Collapsible
                question="After the project is over, what happens?"
                answer="A lot, probably"
              />
              <Collapsible
                question="I don't want to use a CMS, can you update my content for me?"
                answer="A lot, probably"
              />
              <Collapsible
                question="What if I don't like the design?"
                answer="A lot, probably"
              />
              <Collapsible
                question="How much does a website cost?"
                answer="A lot, probably"
              />
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
