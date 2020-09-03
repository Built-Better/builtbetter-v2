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
              {props.title_one} <br /> {props.title_two}
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="grid">
        {props.services.map(service => {
          return <ServiceItem title={service[0]} body={service[1]} />
        })}
      </div>
    </section>
  )
}
