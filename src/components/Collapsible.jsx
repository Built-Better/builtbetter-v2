import React, { useState } from "react"
import PropTypes from "prop-types"

import "./Collapsible.scss"

Collapsible.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

Collapsible.defaultProps = {
  question: "",
  answer: "",
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
        <h3 className="question">{props.question}</h3>
        <div
          className="plus-minus"
          data-active={collapsed ? "false" : "true"}
        ></div>
      </button>
      <div className="answer">
        <p>{props.answer}</p>
      </div>
    </div>
  )
}
