import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import HamSVG from "./HamSVG"
import LogoFull from "../../images/full-white-cut-trans.png"
import LogoFullWhite from "../../images/bbt_logo_white.png"
import Logo from "../../images/bbt_logo.png"

MenuButton.propTypes = {
  sidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
}

MenuButton.defaultProps = {
  sidebarOpen: false,
  toggleSidebar: null,
}

export default function MenuButton(props) {
  const [scrolled, setScrolled] = useState(false)

  // Watch Scrolled Hook
  useLayoutEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div style={{ height: "inherit" }}>
      <AniLink cover duration={1.5} direction="right" bg="#bb73f1" to="/">
        <img
          className="logo-full"
          data-active={!props.sidebarOpen && !scrolled ? "true" : "false"}
          src={LogoFull}
          alt="full logo black"
        />
      </AniLink>
      <AniLink cover duration={1.5} direction="right" bg="#bb73f1" to="/">
        <img
          className="logo-full white"
          data-active={props.sidebarOpen ? "true" : "false"}
          src={LogoFullWhite}
          alt="full logo white"
        />
      </AniLink>
      <AniLink cover duration={1.5} direction="right" bg="#bb73f1" to="/">
        <img
          className="logo-full side-logo"
          data-active={!props.sidebarOpen && scrolled ? "true" : "false"}
          src={Logo}
          alt="logo only"
        />
      </AniLink>
      <div
        className="menu-button"
        onClick={props.toggleSidebar}
        data-active={props.sidebarOpen ? "true" : "false"}
      >
        <HamSVG open={props.sidebarOpen} />
      </div>
    </div>
  )
}
