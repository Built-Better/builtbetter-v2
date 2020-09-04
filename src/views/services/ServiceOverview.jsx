import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./ServiceOverview.scss"
import Arrow from "../../images/assets/arrow.svg"

ServiceOverview.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array,
  backgroundColor: PropTypes.string,
  linkUrl: PropTypes.string,
}

ServiceOverview.defaultProps = {
  title: "",
  summary: "",
  description: "",
  services: [],
  backgroundColor: "",
  linkUrl: "",
}

export default function ServiceOverview(props) {
  const getServices = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <p>
              <span>—</span> {props.services[0]}
            </p>
          </div>
          <div className="col">
            <p>
              <span>—</span> {props.services[1]}
            </p>
          </div>
          <div className="col">
            <p>
              <span>—</span> {props.services[2]}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <span>—</span> {props.services[3]}
            </p>
          </div>
          <div className="col">
            <p>
              <span>—</span> {props.services[4]}
            </p>
          </div>
          <div className="col">
            <p>
              <span>—</span> {props.services[5]}
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <section
      className="service-overview pl pr"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              {props.title}
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              {props.summary}
            </h2>
          </>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div>
            <p
              className={
                isVisible ? "slideUp enter description" : "slideUp description"
              }
            >
              {props.description}
            </p>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div>
            <h5
              style={{ marginBottom: 0 }}
              className={isVisible ? "slideUp enter" : "slideUp"}
            >
              Services We Offer
            </h5>
            <div
              className={
                isVisible
                  ? "slideUp enter service-highlights"
                  : "slideUp service-highlights"
              }
            >
              {getServices()}
              <div className="learn-more">
                <AniLink
                  cover
                  duration={1.5}
                  direction="right"
                  bg="#bb73f1"
                  to={`/services/${props.linkUrl}`}
                >
                  <p>
                    Learn More <Arrow />
                  </p>
                </AniLink>
              </div>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
