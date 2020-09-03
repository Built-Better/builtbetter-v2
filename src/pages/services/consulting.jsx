import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"

import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import ServiceGrid from "../../views/services/ServiceGrid"
import CTA from "../../components/CTA"

const ConsultingPage = props => {
  return (
    <Layout>
      <SEO title="Services | Consulting" />
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
                    App Rescues & Consulting
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <ServiceGrid
          title_one="By sharing our years of experience bulding products,"
          title_two="we'll give you peace of mind with your project."
          services={[
            [
              "Software Project Consulting",
              "Sometimes you just need some fresh eyes. We love diving into technical projects at any stage and finding what makes them tick. Let us help you with your software and web projects.",
            ],
            [
              "UI/UX Redesigns",
              "We want to make the web look good. We can take that website designed in the 1990’s and give it a modern makeover that your customers and metrics will thank you for.",
            ],
            [
              "Deployment & Continuous Integration Strategy",
              "If you’re copying code and pasting it to your server, you’re probably doing it wrong. We will set up a pipeline for your team to continuously push, test and deploy code, streamlining the process for your project.",
            ],
            [
              "Start-Up & App Kickoffs",
              "Have an idea and don’t know where to start? Our experience working with businesses and building software can get you headed in the right direction. Figure out exactly what you need to know and how to execute on your projects.",
            ],
            [
              "On Call Consulting",
              "Sometimes you just need someone to put the fire out or give you peace of mind. We offer on call services for consulting web based software projects.",
            ],
            [
              "Testing and Maintenance Consulting",
              "Testing methodologies and maintenace practices and how to execute on them. Finding options for these can be challenging for teams of all sizes, we offer modern solutions and expertise.",
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

export default ConsultingPage
