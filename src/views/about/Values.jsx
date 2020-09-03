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
              We commit to both work and play.
              <br />
              Here’s what drives us every day.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="info-cards">
        <InfoCard
          title="Passion"
          body="We love what we do and the crazy process that comes with it. From late nights and obsessing over the small details, it’s something that we never grow tired of."
          number="1"
        />
        <InfoCard
          title="Teamwork"
          body="We work together as a team, and not only within our company. We are big on collaborating with our clients and believe that it is essential to our process."
          number="2"
        />
        <InfoCard
          title="Positivity"
          body="It’s no secret, what we do can be challenging. But that’s why we love it. The late nights and breakthrough moments are what push us every day."
          number="3"
        />
        <InfoCard
          title="Learning"
          body="We’re constantly learning and exploring the latest technologies - and we’ll never stop. Staying up to date on the most recent information is important to us."
          number="4"
        />
      </div>
    </section>
  )
}
