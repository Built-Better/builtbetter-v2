import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import slugify from "slugify"
import VisibilitySensor from "../../components/VisibilityCensor"

import "./blog_post.scss"
import {
  createMarkup,
  formatDate,
} from "../../utililties/helper_functions/content_manipulations"
import Layout from "../../layout/layout"
import SEO from "../../layout/seo"
import BlogCard from "../../components/BlogCard"
import Subscribe from "../blog/Subscribe"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.bbschema.content.content
  const relatedPosts = data.bbschema.contents.filter(
    x => x.content.title !== post.title
  )

  const getReadTime = () => {
    const words = post.body.split(" ").length
    const value = Math.ceil(words / 200)
    return `${value} minute read`
  }

  const getRelatedPosts = () => {
    return relatedPosts.map(post => {
      return (
        <VisibilitySensor
          once
          partialVisibility={true}
          key={post.content.title}
        >
          {({ isVisible }) => (
            <div className="post-container">
              <div className={isVisible ? "slideUp enter" : "slideUp"}>
                <BlogCard post={post.content} />
              </div>
            </div>
          )}
        </VisibilitySensor>
      )
    })
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        customOGImage={post.image.url}
        customUrl={`blog_post/${slugify(post.title)}`}
        customDescription={"Official blog of Built Better Technology"}
      />
      <div className="blog_post">
        <section className="default-header">
          <div
            className="middle pl pr"
            style={{
              paddingBottom: "0",
              alignItems: "center",
              display: "flex",
            }}
          >
            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div className="content">
                  <h1
                    className={
                      isVisible ? "slideUp enter custom" : "slideUp custom"
                    }
                  >
                    {post.title}
                  </h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div
            className="bottom pl pr"
            style={{
              paddingTop: "0",
            }}
          >
            <div className="link-container">
              <VisibilitySensor once partialVisibility={true}>
                {({ isVisible }) => (
                  <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                    {formatDate(post.date_posted)} | {getReadTime()}
                  </h5>
                )}
              </VisibilitySensor>
            </div>

            <VisibilitySensor once partialVisibility={true}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "slideUp enter overview" : "slideUp overview"
                  }
                >
                  <h5>Share</h5>
                  <FacebookShareButton url={location.href}>
                    <div className="social-icon">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                  </FacebookShareButton>
                  <TwitterShareButton url={location.href}>
                    <div className="social-icon">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </TwitterShareButton>
                  <LinkedinShareButton url={location.href}>
                    <div className="social-icon">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </LinkedinShareButton>
                  <EmailShareButton url={location.href}>
                    <div className="social-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </EmailShareButton>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </section>
        <section className="post-image">
          <img src={post.image.url} alt={post.title} />
        </section>

        <section className="post-body">
          <div
            className="body-content"
            dangerouslySetInnerHTML={createMarkup(post.body)}
          ></div>
        </section>
        <section className="related">
          <VisibilitySensor once partialVisibility={true}>
            {({ isVisible }) => (
              <h5 className={isVisible ? "slideUp enter" : "slideUp"}>
                Similar Posts
              </h5>
            )}
          </VisibilitySensor>

          <div className="related-posts">{getRelatedPosts()}</div>
        </section>
        <Subscribe />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID, $category: String) {
    bbschema {
      content(id: $id) {
        content
      }
    }
    bbschema {
      contents(
        id: "5f3812eb177bd45bc4448bde"
        limit: 3
        filter_obj: { published: "true", category: $category }
        sort_order: -1
        sort_by: "date_posted"
      ) {
        content
      }
    }
  }
`

export default BlogPostTemplate
