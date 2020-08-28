import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Intro.scss"
import Unicorns from "../../images/landing/unicorns.svg"

export default function Intro(props) {
  return (
    <section className="intro pl pr no-pl-sm no-pr-sm">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Who We Are
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Web Design and Development done right. <br /> For companies that
              want the best of both.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="content-wrapper">
        <div className="graphic">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <img
                src={Unicorns}
                alt="We are Unicorns"
                className={isVisible ? "slideUp enter" : "slideUp"}
              />
            )}
          </VisibilitySensor>
        </div>
        <div className="text">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div
                className={isVisible ? "slideUp enter inner" : "slideUp inner"}
              >
                <h3>Web Services for companies that need the best of both.</h3>
                <p>
                  As web strategists, we bridge the gap between design and
                  technical expertise. We bring your companies goals, brand, and
                  customers together to create unforgetable digtital
                  experiences.
                </p>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}
