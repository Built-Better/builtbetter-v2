import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import CTA from "../components/CTA"
import AppproachItems from "../views/approach/ApproachItems"

const ApproachPage = props => {
  return (
    <Layout>
      <SEO title="Approach" />
      <div>
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
                    Approach
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    Our unique combination of strategy and technical proficiency
                    sets us apart.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <AppproachItems />
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

export default ApproachPage
