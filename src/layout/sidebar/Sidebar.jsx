import React, { useEffect } from "react"
import PropTypes from "prop-types"

import "./Sidebar.scss"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import { useContext } from "react"

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
}

Sidebar.defaultProps = {
  sidebarOpen: false,
  toggleSidebar: null,
}

export default function Sidebar(props) {
  // Global State
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  // Set global state sroll body on unmount
  useEffect(() => {
    if (!props.sidebarOpen && state.bodyScroll === false)
      dispatch({ type: "TOGGLE_BODY_SCROLL" })
  }, [])

  return (
    <div className="sidebar">
      <MenuButton
        sidebarOpen={props.sidebarOpen}
        toggleSidebar={props.toggleSidebar}
      />
      <Menu sidebarOpen={props.sidebarOpen} />
      <div
        className="click-off"
        data-active={props.sidebarOpen ? "true" : "false"}
        onClick={props.sidebarOpen ? props.toggleSidebar : null}
      ></div>
    </div>
  )
}
