import React from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "../components/VisibilityCensor"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./CTA.scss"
import Arrow from "../images/assets/arrow.svg"

CTA.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  backgroundColor: PropTypes.string,
  styles: PropTypes.object,
  classes: PropTypes.string,
}

CTA.defaultProps = {
  title: "",
  body: "",
  linkText: "",
  linkUrl: "",
  backgroundColor: "",
  styles: {},
  classes: "",
}

export default function CTA(props) {
  return (
    <section
      className={`cta pl pr ` + props.classes}
      style={{ backgroundColor: props.backgroundColor, ...props.styles }}
    >
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              <span style={{ backgroundColor: props.backgroundColor }}>
                {props.title}
              </span>
            </h2>
            {props.body ? (
              <p className={isVisible ? "slideUp enter body" : "slideUp body"}>
                {props.body}
              </p>
            ) : (
              ""
            )}
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to={props.linkUrl}
              className={isVisible ? "slideUp enter" : "slideUp"}
            >
              <p>{props.linkText}</p>
              <Arrow />
            </AniLink>
          </>
        )}
      </VisibilitySensor>
    </section>
  )
}
