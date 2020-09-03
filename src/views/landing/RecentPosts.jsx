import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./RecentPosts.scss"
import BlogCard from "../../components/BlogCard"

export default function RecentPosts(props) {
  const posts = useStaticQuery(graphql`
    query RecentPostsQuery {
      bbschema {
        contents(
          id: "5f3812eb177bd45bc4448bde"
          limit: 3
          filter_obj: { published: "true" }
          sort_order: -1
          sort_by: "date_posted"
        ) {
          content
        }
      }
    }
  `).bbschema.contents

  return (
    <section className="recent-posts pl pr">
      <VisibilitySensor once partialVisibility={true}>
        {({ isVisible }) => (
          <>
            <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
              RECENT POSTS
            </h5>
            <h2 className={isVisible ? "slideUp enter" : "slideUp"}>
              We’re constantly learning everyday.
              <br />
              Don’t worry – we only write about the useful stuff.
            </h2>
          </>
        )}
      </VisibilitySensor>

      <div className="posts">
        <div>
          {posts.map((post, i) => {
            return (
              <VisibilitySensor once partialVisibility={true} key={i}>
                {({ isVisible }) => (
                  <div className="post-wrapper">
                    <div className={isVisible ? "slideUp enter" : "slideUp"}>
                      <BlogCard post={post.content} />
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            )
          })}
        </div>
      </div>
    </section>
  )
}
