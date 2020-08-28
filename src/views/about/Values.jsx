import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Values.scss"
import InfoCard from "../../components/InfoCard"

export default function Values(props) {
  return (
    <section className="values pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Values
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              A few sentances about this section. <br /> A few sentances about
              this section.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="info-cards">
        <InfoCard
          title="Value 1"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          number="1"
        />
        <InfoCard
          title="Value 2"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          number="2"
        />
        <InfoCard
          title="Value 3"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          number="3"
        />
        <InfoCard
          title="Value 4"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          number="4"
        />
      </div>
    </section>
  )
}
