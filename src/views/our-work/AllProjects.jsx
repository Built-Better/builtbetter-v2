import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import VisibilitySensor from "../../components/VisibilityCensor"

import "../../views/landing/Work.scss"
import Arrow from "../../images/assets/arrow.svg"

export default function AllProjets(props) {
  const projects = useStaticQuery(graphql`
    query allWorkQuery {
      bbschema {
        contents(
          id: "5f39d6d3c9e4a93ead5627c7"
          limit: 3
          filter_obj: { selected: "true" }
        ) {
          content
        }
      }
    }
  `).bbschema.contents

  return (
    <section className="selected-work pl pr" style={{ background: "none" }}>
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
                  to={`case_study/${slugify(project.content.title)}`}
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
