import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Services.scss"
import Arrow from "../../images/assets/arrow.svg"

export default function Services(props) {
  return (
    <section className="services pl pr">
      <div className="top">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <>
              <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                Our Services
              </h5>
              <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                Sentence about our blog. <br /> More about our blog
              </h2>
            </>
          )}
        </VisibilitySensor>
      </div>
      <div className="cards">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              className="service"
              to="/services/web_design"
            >
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4 className="title">Web Design & Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="bottom">
                  <div className="number">/01</div>
                  <div className="more">
                    Learn More <Arrow />
                  </div>
                </div>
              </div>
            </AniLink>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              className="service"
              to="/services/software"
            >
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4 className="title">Web Apps & Software</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="bottom">
                  <div className="number">/02</div>
                  <div className="more">
                    Learn More <Arrow />
                  </div>
                </div>
              </div>
            </AniLink>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              className="service"
              to="/services/consulting"
            >
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4 className="title">App Rescues & Consultinge</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="bottom">
                  <div className="number">/03</div>
                  <div className="more">
                    Learn More <Arrow />
                  </div>
                </div>
              </div>
            </AniLink>
          )}
        </VisibilitySensor>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              className="service"
              to="/services/support"
            >
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h4 className="title">App Upkeep & Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="bottom">
                  <div className="number">/04</div>
                  <div className="more">
                    Learn More <Arrow />
                  </div>
                </div>
              </div>
            </AniLink>
          )}
        </VisibilitySensor>
      </div>
    </section>
  )
}
