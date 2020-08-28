import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./Team.scss"
import ImageCard from "../../components/ImageCard"

export default function Team(props) {
  const team = useStaticQuery(graphql`
    query TeamQuery {
      bbschema {
        contents(id: "5f3c3c64c9e4a93ead5627cc") {
          content
        }
      }
    }
  `).bbschema.contents

  return (
    <section className="team pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              Our Team
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              Sentance about our team. <br /> Another sentance about our team.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="members">
        {team.map((member, i) => {
          return (
            <ImageCard
              title={member.content.name}
              linkText={member.content.position}
              imageUrl={member.content.image.url}
              key={i}
            />
          )
        })}
      </div>
    </section>
  )
}
