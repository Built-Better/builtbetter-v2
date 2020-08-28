import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./Sidebar.scss"
import Arrow from "../../images/assets/arrow.svg"

Menu.propTypes = {
  sidebarOpen: PropTypes.bool,
}

Menu.defaultProps = {
  sidebarOpen: false,
}

export default function Menu(props) {
  return (
    <div
      className="sidebar-menu"
      data-active={props.sidebarOpen ? "true" : "false"}
    >
      <nav>
        <ul className="main">
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/our_work"
            >
              <h2>
                Our Work
                <Arrow />
              </h2>
              <p>This is a sentence about work.</p>
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/services"
            >
              <h2>
                Services
                <Arrow />
              </h2>
              <p>This is a sentence about services.</p>
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/approach"
            >
              <h2>
                Approach
                <Arrow />
              </h2>
              <p>This is a sentence about approach.</p>
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/about"
            >
              <h2>
                About
                <Arrow />
              </h2>
              <p>This is a sentence about about.</p>
            </AniLink>
          </li>
        </ul>
        <ul className="sub">
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/blog"
            >
              <h5>
                Blog
                <Arrow />
              </h5>
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/contact"
            >
              <h5>
                Contact
                <Arrow />
              </h5>
            </AniLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
