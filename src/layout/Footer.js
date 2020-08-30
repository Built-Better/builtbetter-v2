import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./Footer.scss"
import CABLogo from "../images/cab_logo.png"

const Footer = () => {
  return (
    <section className="ft pl pr" style={{ paddingBottom: "24px" }}>
      <footer>
        <div className="ft-top">
          <div>
            <h2>
              Sentence about us. <br />
              More about us.
            </h2>
          </div>
          <div>
            <h5>Inquires</h5>
            <a href="tel:12505886941">
              <h4 className="phone">250.588.6941</h4>
            </a>
            <a href="mailto:info@builtbetter.tech">
              <h4 className="email">info@builtbetter.tech</h4>
            </a>
          </div>
          <div>
            <img src={CABLogo} alt="Certified Aboriginal Business Logo" />
          </div>
        </div>
        <div className="ft-bottom">
          <div className="social">
            <h5>Stay Connected</h5>
            <div className="accounts">
              <a
                href="https://www.instagram.com/builtbetter.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Instagram</p>
              </a>
              <a
                href="https://www.linkedin.com/company/builtbettertech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>LinkedIn</p>
              </a>
              <a
                href="https://www.facebook.com/builtbetter.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Facebook</p>
              </a>
            </div>
          </div>
          <div className="copy">
            <p>
              <span style={{ marginRight: "6px" }}>&copy;</span>
              {new Date().getFullYear()} Built Better Technology
            </p>
          </div>
          <div className="links">
            <h5 className="general-header">General</h5>

            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/privacy_policy"
            >
              <p>Privacy Policy</p>
            </AniLink>
            <p className="divider">|</p>
            <AniLink
              cover
              duration={1.5}
              direction="right"
              bg="#bb73f1"
              to="/terms_of_use"
            >
              <p>Terms Of Use</p>
            </AniLink>
            <p className="divider">|</p>
            <a
              href="https://www.buildingblockscms.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Admin</p>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
