import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./layout.scss"
import Sidebar from "./sidebar/Sidebar"
import Footer from "./Footer"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"

const Layout = ({ children }) => {
  // Global State
  const dispatch = useContext(GlobalDispatchContext)

  // Local State
  const [sidebar, setSidebar] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  // On Mount
  useEffect(() => {
    // Called on scroll
    function handleScroll() {
      let scrollTop = window.scrollY
      let docHeight = window.document.body.offsetHeight
      let winHeight = window.innerHeight
      let scrollPercent = scrollTop / (docHeight - winHeight)
      let scrollPercentRounded = Math.round(scrollPercent * 100)
      setScrollPercentage(scrollPercentRounded)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    window.scrollTo(0, 0)

    return () => window.removeEventListener("resize", handleScroll)
  }, [])

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_BODY_SCROLL" })
    setSidebar(!sidebar)
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebar} toggleSidebar={toggleSidebar} />
      <div
        className="main-container"
        data-collapsed={sidebar ? "true" : "false"}
      >
        <main
          style={{
            transformOrigin: `100% ${scrollPercentage}%`,
          }}
        >
          {children}
          <Footer />
        </main>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
