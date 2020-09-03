import React from "react"
import VisibilitySensor from "../../../components/VisibilityCensor"

import "./FAQ.scss"
import Collapsible from "../../../components/Collapsible"

export default function FAQ(props) {
  return (
    <section className="faq pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Frequently Asked Questions
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Have a question?
              <br />
              We’ve got an answer.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <div>
            <div className={isVisible ? "slideUp enter" : "slideUp"}>
              <Collapsible
                question="How much does a website cost?"
                answer="Accessing the cost of building a website is kind of like accessing the cost of building a house. How many bedrooms does the house have? Are you hiring an interior designer? The list goes on… To put this in perspective, some of our smallest projects have cost only a few thousand dollars, while a large site with complex features can be priced anywhere around $30,000, $100, 000 and up. Luckily, we have been doing this a while and can generally ballpark price a project with a few details. For an estimate on your projects, just get in touch."
              />
              <Collapsible
                question="What if I don’t like the design of my website?"
                answer="We have yet to run into this situation, but if you’re not happy, we’re not happy. We will work with you over the design iterations until we create a solution that’s what your business needs. We make sure to lay out exactly what you can expect from our team and include a schedule for each step in the process in all our project proposals."
              />
              <Collapsible
                question="Will I be able to update my site’s content and will I have to pay for this?"
                answer="We use our own content management system designed specially for letting non-technical folks edit the content of a website. When we start the project, we’ll outline everything on your site that may need to change. From there, we’ll include this content in the CMS so that you can edit it within a few clicks, at any time. We set you up with an account and quick training session and you’re off to the races, no more paying hundreds of dollars a month to pay a developer for updates. The price is included in the monthly cost of hosting your website and varies by the size of the project."
              />
              <Collapsible
                question="What exactly does a software consultant do?"
                answer="If you have a project you’d like to get off the ground and need a place to start, or you already have a team that needs guidance on some aspect of the project, software consulting may be for you. We won’t actually write any code; you have people for that. Instead, we will come in and address the project and come up with a strategy for you and your team to execute on. This could be something as broad as application architecture and technology choices, or just guidance on integrating testing and dev ops into your workflows. If you want to see if we are a good fit for your project, just reach out and we’ll let you know."
              />
              <Collapsible
                question="Am I on my own after the project is complete?"
                answer="We create tailor made maintenance and support packages for all our website and software projects. If you need support once the project is completed, we’ve got you covered."
              />
            </div>
          </div>
        )}
      </VisibilitySensor>
    </section>
  )
}
