import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Principles.scss"

export default function Principles(props) {
  return (
    <section className="principles pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Principles
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Good work can be difficult to create.
              <br />
              But we don’t take shortcuts.
            </h2>
          </>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div>
            <div className={isVisible ? "slideUp enter body" : "slideUp body"}>
              <div className="what-we-do">
                <h3>
                  What we <strong>do</strong>
                </h3>
                <div className="items">
                  <div className="col">
                    <p>— Work collaboratively</p>
                    <p>— Focus on the details</p>
                    <p>— Respect time</p>
                    <p>— Create unique experiences</p>
                  </div>
                  <div className="col">
                    <p>— Value partnerships made</p>
                    <p>— Celebrate wins</p>
                    <p>— Be straightforward</p>
                  </div>
                </div>
              </div>
              <div className="what-we-dont">
                <h3>
                  What we{" "}
                  <strong style={{ textDecoration: "line-through" }}>
                    don't
                  </strong>{" "}
                  do
                </h3>
                <div className="items">
                  <div className="col">
                    <p>— Work for free</p>
                    <p>— Ignore our clients</p>
                    <p>— Meet unrealistic timelines</p>
                    <p>— Forfeit quality</p>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
