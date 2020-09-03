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
        <ServiceGrid
          title_one="It's more than just a website, it's the digital reflection of your business."
          title_two="That should be done right, not fast and cheap."
          services={[
            [
              "Blazing Fast Websites",
              "We use the latest technologies for all of our projects. Whether you are a small business getting off the ground or a solidified corporate operation, you’re getting the best, period. Premium speed, SEO, and uptime are a guarantee, not an option.",
            ],
            [
              "Fully Integrated CMS",
              "Our in house CMS allows you to edit any of the content you need on your site, quick and painlessly. No more extra fees for routine content edits and updates. Make your changes on the fly and get back to running your business.",
            ],
            [
              "Mobile Ready",
              "All of our projects are built for the modern web. That means supporting mobile first and any browsing platforms your project desires. Your business will be accessible from anyone anywhere.",
            ],
            [
              "Custom Designs",
              "All of our designs are custom made with your business and branding in mind. You'll be able to collaborate with use throughout the whole creative process.",
            ],
            [
              "Business Goals In Mind",
              "Your website should have a clear goal and target audience, or there is no point in paying us to do it. We'll create a strategy that works uniquely for you.",
            ],
            [
              "Endless Possibilities",
              "We don’t want to use WordPress for your website. With the latest technologies at our disposal, we can integrate any functionality you can dream of to your project. You’ll hear less “we can’t do that” and a lot more “that sounds amazing, let’s make it work!”",
            ],
          ]}
        />
        <ToolkitGrid
          images={[Gatsby, Netlify, AdobeXd, Affinity]}
          titleOne="We like to stay up to date with the latest toys."
          titleTwo="Currently, we use the following tools on most of our projects."
        />
        <CTA
          title="Need a quote?"
          body={`Already know the scale of your project and need a quick estimate?\nFill out our questionnaire and we’ll provide you with a complimentary quote.`}
          linkText="Get a Quote"
          linkUrl="https://docs.google.com/forms/d/e/1FAIpQLSdtI6EdsuO9STSVTUtPMGU8xHqjDNn98Lf6qf4lF87UF1tIXw/viewform"
          backgroundColor="white"
        />
      </div>
    </Layout>
  )
}

export default WebDesignPage
