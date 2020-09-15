import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import CaseStudies from "../views/our-work/CaseStudies"
import AllProjects from "../views/our-work/AllProjects"
import CTA from "../components/CTA"

const OurWorkPage = props => {
  return (
    <Layout>
      <SEO title="Our Work" />
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
                    Our Work
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    We help businesses grow by creating amazing digital
                    experiences.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <CaseStudies />
        <AllProjects />
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

export default OurWorkPage
