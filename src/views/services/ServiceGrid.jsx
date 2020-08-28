import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./ServiceGrid.scss"
import ServiceItem from "./ServiceItem"

export default function ServiceGrid(props) {
  return (
    <section className="service-grid pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              What We Do
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Sentence about our blog. <br /> More about our blog
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="grid">
        <ServiceItem
          title="Service 1"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
        <ServiceItem
          title="Service 2"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
        <ServiceItem
          title="Service 3"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
        <ServiceItem
          title="Service 4"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
        <ServiceItem
          title="Service 5"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
        <ServiceItem
          title="Service 6"
          body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet."
        />
      </div>
    </section>
  )
}
