import React from "react"
import PropTypes from "prop-types"
import VisibilitySensor from "../../components/VisibilityCensor"

ServiceItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

ServiceItem.defaultProps = {
  title: "",
  body: "",
}

export default function ServiceItem(props) {
  return (
    <VisibilitySensor once partialVisibility={true}>
      {({ isVisible }) => (
        <div className="service-grid-item">
          <h4 className={isVisible ? "slideUp enter" : "slideUp"}>
            {props.title}
          </h4>
          <p>{props.body}</p>
        </div>
      )}
    </VisibilitySensor>
  )
}
