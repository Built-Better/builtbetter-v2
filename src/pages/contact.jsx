import React from "react"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Form from "../views/contact/Form"
import CTA from "../components/CTA"

const ContactPage = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact">
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
                    Contact
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    Think we’re a great fit for your project?
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <Form />
        <CTA
          title="Need a quote?"
          body={`Already know the scale of your project and need a quick estimate? \n Fill out our questionnaire and we’ll provide you with a complimentary quote.`}
          linkText="Get a Quote"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSdtI6EdsuO9STSVTUtPMGU8xHqjDNn98Lf6qf4lF87UF1tIXw/viewform"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default ContactPage
