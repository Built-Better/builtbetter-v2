import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import ServiceGrid from "../../views/services/ServiceGrid"
import ToolkitGrid from "../../views/services/ToolkitGrid"
import CTA from "../../components/CTA"

// Images for toolkit
import Gatsby from "../../images/services/web/gatsby.png"
import Netlify from "../../images/services/web/netlify.png"
import AdobeXd from "../../images/services/web/adobe-xd.png"
import Affinity from "../../images/services/web/affinity.png"

const WebDesignPage = props => {
  return (
    <Layout>
      <SEO title="Services | Web Design" />
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
                    Website Design & Dev.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <ServiceGrid />
        <ToolkitGrid images={[Gatsby, Netlify, AdobeXd, Affinity]} />
        <CTA
          title="Need a quote?"
          body={`Got an idea for a project or need some help? \n blah blah blah, interest info about contacting us for work.`}
          linkText="Get a Quote"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSdtI6EdsuO9STSVTUtPMGU8xHqjDNn98Lf6qf4lF87UF1tIXw/viewform"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default WebDesignPage
