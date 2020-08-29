import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import ServiceGrid from "../../views/services/ServiceGrid"
import ToolkitGrid from "../../views/services/ToolkitGrid"
import CTA from "../../components/CTA"

// Images for toolkit
import ReactJS from "../../images/services/software/react.png"
import Node from "../../images/services/software/node.png"
import DigitalOcean from "../../images/services/software/digital-ocean.png"
import Cyress from "../../images/services/software/cypress.png"
import AdobeXd from "../../images/services/web/adobe-xd.png"
import Affinity from "../../images/services/web/affinity.png"

const SoftwarePage = props => {
  return (
    <Layout>
      <SEO title="Services | Software" />
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
                    Servicess
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    Web Apps & Software
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <ServiceGrid />
        <ToolkitGrid
          images={[ReactJS, Node, DigitalOcean, Cyress, AdobeXd, Affinity]}
        />
        <CTA
          title="Need a quote?"
          body={`Got an idea for a project or need some help? \n blah blah blah, interest info about contacting us for work.`}
          linkText="Contact Us"
          linkUrl="/contact"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default SoftwarePage
