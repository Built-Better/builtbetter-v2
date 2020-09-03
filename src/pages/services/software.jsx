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
        <ServiceGrid
          title_one="A modern approach to software development,"
          title_two="with your businesses goals at the core."
          services={[
            [
              "UI/UX Strategy",
              "Our primary concern is the project's usability for your business. We’ll take you through our project development process and get the user interface and experience perfected before our development team writes a line of code.",
            ],
            [
              "User & Business Focused",
              "You and your users don’t see the code, you see a product. Let us worry about speed, security, scalability and all the other technical buzz words you can think of. Let’s talk about how this investment will help your business.",
            ],
            [
              "Iterative Development",
              "Modern projects are subject to change at every step, we take an agile approach to all of our software projects and iterate until it's right.",
            ],
            [
              "Hosting & Maintenance",
              "Our clients rest easy with our products. We offer full support packages for all of our products including but not limited to: server hosting, training, test suites, code base maintenance, and user support.",
            ],
            [
              "Modern Full Stack Application Development",
              "We use the best tools available for the job, and we're always keeping up with new additions to the tech industry - we’re always learning! This lets us do our job faster and meet your needs best.",
            ],
            [
              "Immense Collaboration",
              "We want you to be a part of your project. We'll set up routine meetings and demos to gather feedback and make sure we're steering your project in the right direction.",
            ],
          ]}
        />
        <ToolkitGrid
          images={[ReactJS, Node, DigitalOcean, Cyress, AdobeXd, Affinity]}
          titleOne="We like to stay up to date with the latest toys."
          titleTwo="Currently, we use the following tools on most of our projects."
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

export default SoftwarePage
