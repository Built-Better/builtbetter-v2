import React, { useState } from "react"
import PropTypes from "prop-types"
import { createMarkup } from "../utililties/helper_functions/content_manipulations"

import "./Collapsible.scss"

Collapsible.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  html: PropTypes.bool,
}

Collapsible.defaultProps = {
  question: "",
  answer: "",
  html: false,
}

export default function Collapsible(props) {
  const [collapsed, setCollapsed] = useState(true)

  const handleClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      className="collapsible"
      data-collapsed={collapsed ? "true" : "false"}
      onClick={handleClick}
    >
      <button>
        {props.html ? (
          <h6
            className="question"
            dangerouslySetInnerHTML={createMarkup(props.question)}
          ></h6>
        ) : (
          <h6 className="question">{props.question}</h6>
        )}

        <div className="plus-minus-container">
          <div
            className="plus-minus"
            data-active={collapsed ? "false" : "true"}
          ></div>
        </div>
      </button>
      <div className="answer">
        <p>{props.answer}</p>
      </div>
    </div>
  )
}
