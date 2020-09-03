import React from "react"
import VisibilitySensor from "../../components/VisibilityCensor"
import Collapsible from "../../components/Collapsible"

import "./ApproachItems.scss"

export default function ApproachItems(props) {
  return (
    <section className="process pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Process
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              There are no secrets here. <br /> It’s all in our strategy.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="cols">
        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <div className="summary">
              <p className={isVisible ? "slideUp enter" : "slideUp"}>
                At Built Better Technology we build all of our web and software
                products from scratch. Our team works collaboratively with you
                to create unique solutions for your business. To help you reach
                your business goals, we ensure that we set up a strategy that
                will allow us to monitor the project and produce the best
                outcome. With each project we work on, we offer our partners
                convenient support and maintenance packages, as we know
                technology is constantly changing..
              </p>
            </div>
          )}
        </VisibilitySensor>

        <div className="collapsibles">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <Collapsible
                  html={true}
                  question={`<span>/01</span>&nbsp;&nbsp;Discovery`}
                  answer="When we partner with you we want to understand more about your business. 
                  We want to learn about your business’s past, but more importantly, we want to learn 
                  about your desired future. During the discovery phase of our projects, we will 
                  discuss both the challenges and goals of your business."
                />
                <Collapsible
                  html={true}
                  question={`<span>/02</span>&nbsp;&nbsp;Strategy`}
                  answer="Each partnership is different, so we create a personalized strategy based on your business’s goals. 
                  To determine the strategy, we’ll put together a briefing document for you that will include the entire 
                  scope of the project – background research, target audience, project features, deliverables, and a timeline of the project."
                />
                <Collapsible
                  html={true}
                  question={`<span>/03</span>&nbsp;&nbsp;Design`}
                  answer="No matter what your project consists of, we know the importance of captivating your audience. 
                  Whether it’s stunning imagery, elegant typography, or modern layouts, we know how to design in a way 
                  that invites your audience to learn more about your brand. During the design phase, we will provide 
                  you with both low-fidelity and high-fidelity prototypes. It’s important to us that you are happy with 
                  your design, so we do not begin development until a design has been approved."
                />
                <Collapsible
                  html={true}
                  question={`<span>/04</span>&nbsp;&nbsp;Development`}
                  answer="When it comes to development we are experts in problem-solving – we prefer to use newer technology 
                  stacks and incorporate them into all of our work. Having the latest technology is important to us, as it 
                  doesn’t limit what we are able to do. No matter what the project, we will ensure that we create a seamless 
                  experience that enables your audience to interact with your project in an unforgettable way."
                />
                <Collapsible
                  html={true}
                  question={`<span>/05</span>&nbsp;&nbsp;Hand-Off`}
                  answer="Once a project is completed, we begin the hand-off phase. During this phase, we give you access to the 
                  completed project. Based on your experience with the project and your approval, we will launch the final version. 
                  As technologies continue to evolve, we know it can be difficult to keep up with the latest developments. This is 
                  why we offer our partners support and maintenance packages with every hand-off."
                />
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  )
}
