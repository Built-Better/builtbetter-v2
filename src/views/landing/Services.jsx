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
                What We Do
              </h5>
              <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                Helping companies do business better.
                <br />
                Let your brand stand out.
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
                  Beautifully custom designed and developed websites that make
                  your business stand out from the competition. We combine
                  strategy and utility every step of the way during the
                  construction of your online presence – our websites look great
                  and get results.
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
                  Simplify your workflows with the right custom software for
                  your business operations. If it can be automated, we can bring
                  it to life on the web.
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
                <h4 className="title">App Rescues & Consulting</h4>
                <p>
                  Above all, we are problem solvers. Software and design-based
                  consulting for when you need an experienced fresh set of eyes.
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
                  The project isn’t over when the development stops. We’ll be
                  there for you long after with our tailored support and
                  maintenance packages.
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
