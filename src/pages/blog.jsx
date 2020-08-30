import React from "react"
import { graphql } from "gatsby"
import VisibilitySensor from "../components/VisibilityCensor"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import BlogPosts from "../views/blog/BlogPosts"
import Subscribe from "../views/blog/Subscribe"

const BlogPage = data => {
  return (
    <Layout fluid="true">
      <SEO title="Built Better Blog" />
      <div>
        <section className="default-header">
          <div
            className="middle pl pr"
            style={{ display: "flex", alignItems: "center" }}
          >
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="content">
                  <h1
                    className={
                      isVisible ? "slideUp enter common" : "slideUp common"
                    }
                  >
                    The Blog
                  </h1>
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    This is a small write up about our blog.
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <BlogPosts />
        <Subscribe />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    bbschema {
      contents(
        id: "5f3812eb177bd45bc4448bde"
        filter_obj: { published: "true" }
        sort_order: -1
        sort_by: "date_posted"
      ) {
        content
      }
    }
  }
`

export default BlogPage
