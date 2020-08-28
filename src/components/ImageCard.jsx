import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import VisibilitySensor from "../components/VisibilityCensor"

import "./ImageCard.scss"
import Arrow from "../images/assets/arrow.svg"

ImageCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
}

ImageCard.defaultProps = {
  title: "",
  imageUrl: "",
  linkText: "",
  linkUrl: "",
}

export default function ImageCard(props) {
  const getCard = isVisible => {
    return (
      <div className={isVisible ? "slideUp enter" : "slideUp"}>
        <img src={props.imageUrl} alt={props.title} />
        <div className="info">
          <h4 className="title">{props.title}</h4>
          <div className="more">
            <p>{props.linkText}</p>
            {props.linkUrl ? <Arrow /> : ""}
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    )
  }

  if (props.linkUrl)
    return (
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <Link className="image-card" to={props.linkUrl}>
            {getCard(isVisible)}
          </Link>
        )}
      </VisibilitySensor>
    )

  return (
    <VisibilitySensor once partialVisibility={true}>
      {({ isVisible }) => (
        <div className="image-card">{getCard(isVisible)}</div>
      )}
    </VisibilitySensor>
  )
}
