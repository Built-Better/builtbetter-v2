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
                  All of your web based services under one roof.
                </h1>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </section>
      <ServiceOverview
        backgroundColor="white"
        title="WEB DESIGN & DEVELOPMENT"
        summary={`Beautifully custom-made websites for your business.\nTake your digital brand to the next level.`}
        description="In today’s digital landscape, every business should have an online presence that helps them 
        differentiate themselves. We design each and everyone of our website projects custom, making sure that the 
        details specific to each project can stand out. You won’t see SquareSpace templates here."
        linkUrl="web_design"
        services={[
          "Blazing Fast Websites",
          "Fully Integrated CMS",
          "Mobile Ready",
          "Custom Designs",
          "Business Goals In Mind",
          "Endless Possibilities",
        ]}
      />
      <ServiceOverview
        backgroundColor="none"
        title="WEB APPS & SOFTWARE"
        summary={`Custom software for your idea or business operations.\nSimplify your workflows with an internal tool or bring your startup’s idea to life.`}
        description="We love making the world a simpler place by writing code – Built Better provides full stack application development for all your web-based 
        needs. Databases, internal productivity tools and custom e-commerce are just a few of the software products we have brought to life in the 
        browser."
        linkUrl="software"
        services={[
          "UI/UX Strategy to Streamline Usability",
          "User & Business Focused",
          "Iterative Development",
          "Hosting & Maintenance",
          "Modern Full Stack Application Development",
          "Immense Collaboration",
        ]}
      />
      <ServiceOverview
        backgroundColor="white"
        title="APP RESCUES & CONSULTING"
        summary={`Sometimes you just need some fresh eyes.\nWe have the experience to help with your web based projects.`}
        description="Our unique combination of technical know-how, business experience and user interface design let us carve 
        a path for your project to reach success. Yes, we know how to write code and design beautiful applications, but so do 
        a lot of people. We can use these tools to get results for your business needs and workflows because we’ve been through 
        the process before."
        linkUrl="consulting"
        services={[
          "Software Project Consulting",
          "UI/UX Redesigns",
          "Deployment & Continuous Integration Strategy",
          "Start-Up & App Kickoffs",
          "On Call Consulting",
          "Project Analysis",
        ]}
      />
      <ServiceOverview
        backgroundColor="none"
        title="UPKEEP & SUPPORT"
        summary={`A project never really ends.\nWe are here for you as long as you need us.`}
        description="We are there for all our clients well after launch day. We offer tailor 
        made solutions for maintenance and support for each of our projects. From content updates, 
        integrated testing, and email support, we can see your project through for its entirety."
        linkUrl="support"
        services={[
          "Domain & Server Hosting",
          "User Tickets & Debugging",
          "Maintainable Code Bases",
          "Content Updates",
          "Future Features",
          "Ongoing Support",
        ]}
      />
      <CTA
        title="Work With Us"
        body={`Got an idea for a project and think we’re a great fit? \n We’d love to talk about it.`}
        linkText="Contact Us"
        linkUrl="/contact"
        backgroundColor="white"
      />
    </Layout>
  )
}

export default ServicesPage
