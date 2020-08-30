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
                <p
                  className={
                    isVisible ? "slideUp enter overview" : "slideUp overview"
                  }
                >
                  Write up about This is Table Talk project. Why we were hired.
                  Companies goal. End product. Write up about This is Table Talk
                  project. Why we were hired. Companies goal. End product. Write
                  up about This is Table Talk project. Why we were hired.
                  Companies goal. End product.
                </p>
              )}
            </VisibilitySensor>
          </div>
        </section>

        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <section className="image pl pr">
              <img
                src={project.laptop_preview.url}
                alt="Laptop and Mobile previews"
                className={isVisible ? "slideUp enter" : "slideUp"}
              />
            </section>
          )}
        </VisibilitySensor>
        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h5>Goal</h5>
                <div
                  className="title"
                  dangerouslySetInnerHTML={createMarkup(project.goal_title)}
                ></div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.goal_body)}
                ></div>
              </div>
            )}
          </VisibilitySensor>
        </section>

        <VisibilitySensor once partialVisibility={true}>
          {({ isVisible }) => (
            <section className="image pl pr" style={{ marginBottom: "0" }}>
              <img
                src={project.desktop_preview.url}
                alt="Laptop and Mobile previews"
                className={isVisible ? "slideUp enter" : "slideUp"}
              />
            </section>
          )}
        </VisibilitySensor>

        <section className="bg-white pl pr">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h5>Design</h5>
                <div
                  className="title"
                  dangerouslySetInnerHTML={createMarkup(project.design_title)}
                ></div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.design_body)}
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
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h5>Development</h5>
                <div
                  className="title"
                  dangerouslySetInnerHTML={createMarkup(project.dev_title)}
                ></div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.dev_body)}
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
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <h5>Outcome</h5>
                <div
                  className="title"
                  dangerouslySetInnerHTML={createMarkup(project.outcome_title)}
                ></div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <div
                  dangerouslySetInnerHTML={createMarkup(project.outcome_body)}
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
              <div className="right">
                <VisibilitySensor once partialVisibility={true}>
                  {({ isVisible }) => (
                    <img
                      src={project.testimonial_image.url}
                      alt="Testimonial Source"
                      className={isVisible ? "slideUp enter" : "slideUp"}
                    />
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}

        <section>
          <CTA
            title="Work With Us"
            body={`Got an idea for a project or need some help?\nblah blah blah, interest info about contacting us for work.`}
            linkText="Contact Us"
            linkUrl="/"
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
