import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import VisibilitySensor from "../components/VisibilityCensor"

import "./InfoCard.scss"
import Arrow from "../images/assets/arrow.svg"

InfoCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  number: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
}

InfoCard.defaultProps = {
  title: "",
  body: "",
  number: "",
  linkUrl: "",
  linkText: "",
}

export default function InfoCard(props) {
  const getCard = isVisible => {
    return (
      <div className={isVisible ? "slideUp enter" : "slideUp"}>
        <h4 className="title">{props.title}</h4>
        <p>{props.body}</p>
        <div className="bottom">
          <div className="number">/0{props.number}</div>
          {props.linkUrl ? (
            <div className="more">
              {props.linkText} <Arrow />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }

  if (props.linkUrl)
    return (
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <Link className="info-card" to={props.linkUrl}>
            {getCard(isVisible)}
          </Link>
        )}
      </VisibilitySensor>
    )

  return (
    <VisibilitySensor once partialVisibility={true}>
      {({ isVisible }) => <div className="info-card">{getCard(isVisible)}</div>}
    </VisibilitySensor>
  )
}
