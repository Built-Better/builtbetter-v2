import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Team from "../views/about/Team"
import Story from "../views/about/Story"
import Principles from "../views/about/Principles"
import Values from "../views/about/Values"
import CTA from "../components/CTA"

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <section className="default-header">
          <div
            className="middle pl pr"
            style={{ display: "flex", alignItems: "center" }}
          >
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="content">
                  <h1
                    className={
                      isVisible ? "slideUp enter common" : "slideUp common"
                    }
                  >
                    About Us
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    Everything behind Built Better Technology.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <Team />
        {/* <Story /> */}
        <Values />
        <Principles />
        <CTA
          title="Work With Us"
          body={`Got an idea for a project and think we’re a great fit? \n We’d love to talk about it.`}
          linkText="Contact Us"
          linkUrl="/contact"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default AboutPage
