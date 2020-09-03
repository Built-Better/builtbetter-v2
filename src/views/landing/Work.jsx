import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Work.scss"
import Arrow from "../../images/assets/arrow.svg"

export default function Work(props) {
  const combined_query = useStaticQuery(graphql`
    query SelectedWorkQuery {
      bbschema {
        projects: contents(
          id: "5f4ea46ac9e4a93ead5627db"
          filter_obj: { selected: "true" }
        ) {
          content
        }
        cases: contents(
          id: "5f39d6d3c9e4a93ead5627c7"
          filter_obj: { selected: "true" }
        ) {
          content
        }
      }
    }
  `)

  const projects = combined_query.bbschema.cases.concat(
    combined_query.bbschema.projects
  )

  return (
    <section className="selected-work pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
            Selected Work
          </h5>
        )}
      </VisibilitySensor>
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
            Our work gets results. <br /> See some of our highlights.
          </h2>
        )}
      </VisibilitySensor>

      <div className="projects">
        {projects.map((project, i) => {
          return (
            <VisibilitySensor once partialVisibility={true} key={i}>
              {({ isVisible }) => (
                <AniLink
                  cover
                  duration={1.5}
                  direction="right"
                  bg="#bb73f1"
                  className="project"
                  to={
                    project.content.case_study_preview
                      ? `/case_study/${slugify(project.content.title)}`
                      : `/projects/${slugify(project.content.title)}`
                  }
                >
                  <div className={isVisible ? "slideUp enter" : "slideUp"}>
                    <img
                      src={project.content.preview_image.url}
                      alt={project.content.title}
                    />
                    <div className="info">
                      <h4 className="title">{project.content.title}</h4>
                      <div className="more">
                        <p>Explore</p>
                        <Arrow />
                      </div>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </AniLink>
              )}
            </VisibilitySensor>
          )
        })}
      </div>
    </section>
  )
}
