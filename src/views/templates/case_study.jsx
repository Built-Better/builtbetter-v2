import React from "react"
import { graphql } from "gatsby"
import VisibilitySensor from "../../components/VisibilityCensor"

import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import "./case_study.scss"
import "../../components/CTA"
import CTA from "../../components/CTA"
import { createMarkup } from "../../utililties/helper_functions/content_manipulations"
import Arrow from "../../images/assets/arrow.svg"

const CaseStudy = ({ data }) => {
  const project = data.bbschema.content.content
  return (
    <Layout>
      <SEO title="Case Study" />
      <div className="case-study">
        <section className="default-header pl pr">
          <div
            className="middle pl pr"
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "0",
            }}
          >
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="content">
                  <h1
                    className={
                      isVisible ? "slideUp enter common" : "slideUp common"
                    }
                  >
                    Case Study
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    {project.title}.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="bottom pl pr" style={{ paddingTop: "0" }}>
            <div className="link-container">
              <VisibilitySensor once partialVisibility={true}>
                {({ isVisible }) => (
                  <a
                    href={project.link}
                    className={
                      isVisible ? "slideUp enter link" : "slideUp link"
                    }
                  >
                    <h5>Visit Website</h5>
                    <Arrow />
                  </a>
                )}
              </VisibilitySensor>
            </div>

            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="overview">
                  <div
                    dangerouslySetInnerHTML={createMarkup(project.summary)}
                    className={isVisible ? "slideUp enter" : "slideUp"}
                  ></div>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>

        <section className="image pl pr" style={{ marginBottom: "0" }}>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <img
                  src={project.laptop_preview.url}
                  alt="Laptop and Mobile previews"
                  className={isVisible ? "slideUp enter" : "slideUp"}
                />
              </div>
            )}
          </VisibilitySensor>
        </section>

        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                  Goal
                </h5>
                <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                  {project.goal_title_line_1}
                  <br />
                  {project.goal_title_line_2}
                </h2>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.goal_body)}
                  className={isVisible ? "slideUp enter" : "slideUp"}
                ></div>
              </div>
            )}
          </VisibilitySensor>
        </section>

        <section className="image pl pr" style={{ marginBottom: "0" }}>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <img
                  src={project.desktop_preview.url}
                  alt="Laptop and Mobile previews"
                  className={isVisible ? "slideUp enter" : "slideUp"}
                />
              </div>
            )}
          </VisibilitySensor>
        </section>

        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                  Design
                </h5>
                <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                  {project.design_title_line_1}
                  <br />
                  {project.design_title_line_2}
                </h2>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.design_body)}
                  className={isVisible ? "slideUp enter" : "slideUp"}
                ></div>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className="image pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <img
                  src={project.screen_one.url}
                  alt="Laptop and Mobile previews"
                  className={isVisible ? "slideUp enter" : "slideUp"}
                />
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                  Development
                </h5>
                <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                  {project.dev_title_line_1}
                  <br />
                  {project.dev_title_line_2}
                </h2>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.dev_body)}
                  className={isVisible ? "slideUp enter" : "slideUp"}
                ></div>
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className="image pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <img
                  src={project.screen_two.url}
                  alt="Laptop and Mobile previews"
                  className={isVisible ? "slideUp enter" : "slideUp"}
                />
              </div>
            )}
          </VisibilitySensor>
        </section>
        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                  Outcome
                </h5>
                <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
                  {project.outcome_title_line_1}
                  <br />
                  {project.outcome_title_line_2}
                </h2>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.outcome_body)}
                  className={isVisible ? "slideUp enter" : "slideUp"}
                ></div>
              </div>
            )}
          </VisibilitySensor>
        </section>
        {project.testimonial_name &&
        project.testimonial_body &&
        project.testimonial_image.url ? (
          <section className="testimonial pl pr">
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                  What They Say
                </h5>
              )}
            </VisibilitySensor>
            <div>
              <div className="left">
                <VisibilitySensor once partialVisibility={true}>
                  {({ isVisible }) => (
                    <div>
                      <h1 className={isVisible ? "slideUp enter" : "slideUp"}>
                        {project.testimonial_name}. <br />{" "}
                        {project.testimonial_position}.
                      </h1>
                    </div>
                  )}
                </VisibilitySensor>
                <VisibilitySensor once partialVisibility={true}>
                  {({ isVisible }) => (
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        project.testimonial_body
                      )}
                      className={
                        isVisible ? "slideUp enter body" : "slideUp body"
                      }
                    ></div>
                  )}
                </VisibilitySensor>
              </div>
              <VisibilitySensor once partialVisibility={true}>
                {({ isVisible }) => (
                  <div className="right">
                    <img
                      src={project.testimonial_image.url}
                      alt="Testimonial Source"
                      className={isVisible ? "slideUp enter" : "slideUp"}
                    />
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </section>
        ) : (
          ""
        )}

        <section>
          <CTA
            title="Work With Us"
            body={`Got an idea for a project and think we’re a great fit?\nWe’d love to talk about it.`}
            linkText="Contact Us"
            linkUrl="/contact"
            backgroundColor="white"
          />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID) {
    bbschema {
      content(id: $id) {
        content
      }
    }
  }
`

export default CaseStudy
