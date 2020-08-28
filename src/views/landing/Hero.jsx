import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Hero.scss"
import Arrow from "../../images/assets/arrow.svg"

Hero.propTypes = {}

Hero.defaultProps = {}

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-container pl pr">
        <div className="top">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <h1 className={isVisible ? "slideUp enter" : "slideUp"}>
                Personalized web & software products,{" "}
                <span className="highlight">built</span> by us, to help you do
                business <span className="highlight">better</span>.
              </h1>
            )}
          </VisibilitySensor>
        </div>
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "slideUp enter quick-links" : "slideUp quick-links"
              }
            >
              <AniLink
                cover
                duration={1.5}
                direction="right"
                bg="#bb73f1"
                className="project"
                to="/our_work"
              >
                <h5>Work</h5>
                <p>We make some good stuff sometimes guys.</p>
                <Arrow />
              </AniLink>
              <AniLink
                cover
                duration={1.5}
                direction="right"
                bg="#bb73f1"
                className="project"
                to="services"
              >
                <h5>Services</h5>
                <p>We make some good stuff sometimes guys.</p>
                <Arrow />
              </AniLink>
            </div>
          )}
        </VisibilitySensor>
      </div>
      <div className="explore">
        <p>
          <span>Explore</span>
        </p>
        <div className="line"></div>
      </div>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div
            className={isVisible ? "slideUp enter social" : "slideUp social"}
          >
            <div className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social-icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
