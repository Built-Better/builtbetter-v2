import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import ServiceOverview from "../views/services/ServiceOverview"
import CTA from "../components/CTA"

const ServicesPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
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
                  This is a small write up about our services.
                </h1>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </section>
      <ServiceOverview
        backgroundColor="white"
        title="WEB DESIGN & DEVELOPMENT"
        summary={`Sentence about this service. \nSentence about this service.`}
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod."
        linkUrl="web_design"
        services={[
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
        ]}
      />
      <ServiceOverview
        backgroundColor="none"
        title="WEB DESIGN & DEVELOPMENT"
        summary={`Sentence about this service. \nSentence about this service.`}
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod."
        linkUrl="software"
        services={[
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
        ]}
      />
      <ServiceOverview
        backgroundColor="white"
        title="WEB DESIGN & DEVELOPMENT"
        summary={`Sentence about this service. \nSentence about this service.`}
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod."
        linkUrl="consulting"
        services={[
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
        ]}
      />
      <ServiceOverview
        backgroundColor="none"
        title="WEB DESIGN & DEVELOPMENT"
        summary={`Sentence about this service. \nSentence about this service.`}
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
         elitr, sed diam nonumy eirmod."
        linkUrl="support"
        services={[
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
        ]}
      />
      <CTA
        title="Work With Us"
        linkText="All Blog Posts"
        linkUrl="/blog"
        backgroundColor="white"
      />
    </Layout>
  )
}

export default ServicesPage
