import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import ServiceGrid from "../../views/services/ServiceGrid"
import CTA from "../../components/CTA"

const SupportPage = props => {
  return (
    <Layout>
      <SEO title="Services | Support" />
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
                    Services
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    Ongoing Support.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <ServiceGrid
          title_one="Support strategies for all of our projects,"
          title_two="designed for your needs."
          services={[
            [
              "Domain & Server Hosting",
              "Got a domain and server already? Great, we can work with that. Have nothing but an idea and a vision? Great, we can provide all the building blocks. Our team can manage domains, servers, and hosting to provide a fast and secure home for your project on the web.",
            ],
            ["User Tickets & Debugging", ""],
            ["Maintainable Code Bases", ""],
            ["Content Updates", ""],
            ["Future Features", ""],
            ["Ongoing Support", ""],
          ]}
        />
        <CTA
          title="Work With Us"
          body={`Got an idea for a project and think we’re a great fit?\n We’d love to talk about it.`}
          linkText="Contact Us"
          linkUrl="/contact"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default SupportPage
