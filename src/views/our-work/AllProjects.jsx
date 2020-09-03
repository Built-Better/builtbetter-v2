import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./AllProjects.scss"
import "../../views/landing/Work.scss"
import Arrow from "../../images/assets/arrow.svg"

export default function AllProjets(props) {
  const combined_query = useStaticQuery(graphql`
    query allWorkQuery {
      bbschema {
        projects: contents(id: "5f4ea46ac9e4a93ead5627db") {
          content
        }
        cases: contents(id: "5f39d6d3c9e4a93ead5627c7") {
          content
        }
      }
    }
  `)

  const projects = combined_query.bbschema.projects.concat(
    combined_query.bbschema.cases
  )

  return (
    <section
      className="selected-work all-work pl pr"
      style={{ background: "none" }}
    >
      <h5>All Projects</h5>
      <h2>
        Our entire body of work to date.
        <br />
        Take a look at all of our creations and the great companies we've worked
        with.
      </h2>
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
                    project.case_study_preview
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
