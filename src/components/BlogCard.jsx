import React from "react"
import slugify from "slugify"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./BlogCard.scss"
import { formatDate } from "../utililties/helper_functions/content_manipulations"

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <AniLink
        cover
        duration={1.5}
        direction="right"
        bg="#bb73f1"
        to={`/blog_post/${slugify(post.title)}`}
      >
        <div className="post-top">
          <img src={post.image.url} alt={post.title} />
        </div>
        <div className="post-bottom">
          <p className="date">{formatDate(post.date_posted)}</p>

          <div className="title">
            <h4 className="title-text">{post.title}</h4>
            <div className="underline-padded"></div>
          </div>

          <div className="bottom">
            <div className="category">
              <div className={post.category.toLowerCase()}>{post.category}</div>
            </div>
          </div>
        </div>
      </AniLink>
    </div>
  )
}
