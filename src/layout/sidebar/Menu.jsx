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
              <h3>
                Our Work
                <Arrow />
              </h3>
              <p>Stuff we’ve created.</p>
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
              <h3>
                Services
                <Arrow />
              </h3>
              <p>What we offer.</p>
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
              <h3>
                Approach
                <Arrow />
              </h3>
              <p>How we do it.</p>
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
              <h3>
                About
                <Arrow />
              </h3>
              <p>Who we are.</p>
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
