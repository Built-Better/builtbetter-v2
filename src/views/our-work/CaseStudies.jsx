import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import slugify from "slugify"

import "./CaseStudies.scss"
import VisibilitySensor from "../../components/VisibilityCensor"
import Arrow from "../../images/assets/arrow.svg"

export default function CaseStudies(props) {
  const projects = useStaticQuery(graphql`
    query allCaseStudiesQuery {
      bbschema {
        contents(id: "5f39d6d3c9e4a93ead5627c7") {
          content
        }
      }
    }
  `).bbschema.contents

  console.log(projects)

  return (
    <section className="case-studies pl pr">
      <h5>Case Studies</h5>
      <h2>
        Diving deep into our proudest works.
        <br />
        See exaclty what you can expect from our team.
      </h2>
      <div className="grid">
        {projects.map((project, i) => {
          return (
            <VisibilitySensor once partialVisibility={true} key={i}>
              {({ isVisible }) => (
                <AniLink
                  cover
                  duration={1.5}
                  direction="right"
                  bg="#bb73f1"
                  to={`/case_study/${slugify(project.content.title)}`}
                >
                  <div className="case-study">
                    <img
                      src={project.content.case_study_preview.url}
                      alt={project.content.title}
                    />
                    <div className="info">
                      <h3 className="title">{project.content.title}</h3>
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
