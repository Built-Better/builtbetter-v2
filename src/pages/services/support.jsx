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
            [
              "User Tickets & Debugging",
              "Send those users and bugs our way and we’ll make sure they’re taken care of. You can rest assured knowing that your application is backed by our team.",
            ],
            [
              "Maintainable Code Bases",
              "We strive to write technically sound, easily maintainable code bases because we care about the next developer. Your in house developer will be glad you chose Built Better Technology.",
            ],
            [
              "Content Updates",
              "Routine content updates are time consuming. We can set up update packages or source the content from our own CMS to save you time and money.",
            ],
            [
              "Future Features",
              "Big projects are never really finished, they just evolve. We can stick around as the experts of your codebase to implement new features should there be a need.",
            ],
            [
              "Ongoing Support",
              "When you work with us, your problems are our problems. We offer full customer support for all of our projects after deployment. Customer support, training, and timely fixes can be incorporated into each of our projects.",
            ],
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
