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

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-container pl pr">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              className={
                isVisible ? "slideUp enter contact-us" : "slideUp contact-us"
              }
              to="/contact"
            >
              <p>Contact Us</p>
              <Arrow />
            </AniLink>
          )}
        </VisibilitySensor>
        <div className="top">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <h1 className={isVisible ? "slideUp enter" : "slideUp"}>
                Personalized web & software products,
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
                <p>View our latest creations.</p>
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
                <p>View all of our digital services.</p>
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
              <a
                href="https://www.instagram.com/builtbetter.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.facebook.com/builtbetter.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/company/builtbettertech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <AniLink
            cover
            duration={1.5}
            direction="right"
            bg="#bb73f1"
            className={
              isVisible
                ? "slideUp enter contact-us mobile"
                : "slideUp contact-us mobile"
            }
            to="/contact"
          >
            <p>Contact Us</p>
            <Arrow />
          </AniLink>
        )}
      </VisibilitySensor>
    </section>
  )
}
