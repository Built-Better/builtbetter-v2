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
          <h4 className="desktop-title">{props.title}</h4>
          <h4 className="mobile-title">{props.title}</h4>
          <p>{props.body}</p>
        </div>
      )}
    </VisibilitySensor>
  )
}
