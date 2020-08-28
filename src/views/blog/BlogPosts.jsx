import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import IsoTopeGrid from "react-isotope"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import "./BlogPosts.scss"
import BlogCard from "../../components/BlogCard"

export default function BlogPosts(props) {
  const posts = useStaticQuery(graphql`
    query AllPostsQuery {
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
  `).bbschema.contents

  const filtersDefault = [
    { label: "all", isChecked: true },
    { label: "business", isChecked: false },
    { label: "development", isChecked: false },
    { label: "design", isChecked: false },
  ]

  const stateRef = useRef()
  const [currentWindowWidth, setCurrentWindowWidth] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)
  const [postsSelected, setPostsSelected] = useState([])
  const [postsAvailable, setPostsAvailable] = useState([])
  const [filters, updateFilters] = useState(filtersDefault)
  const [width, setWidth] = useState(-1)
  const [cardHeight, setCardHeight] = useState(-1)
  const [containerHeight, setContainerHeight] = useState(-1)
  const [cols, setCols] = useState(3)
  const itemRef = useRef(null)

  stateRef.current = currentWindowWidth

  const post_limit = 9
  const pages = Math.ceil(postsAvailable.length / post_limit)

  useEffect(() => {
    let posts_selected = []
    let posts_available = []
    for (let i = 0; i < posts.length; i++) {
      if (i < post_limit) {
        posts_selected.push({
          ...posts[i].content,
          id: `i-${i}`,
          filter: [posts[i].content.category.toLowerCase()],
        })
      }
      posts_available.push({
        ...posts[i].content,
        id: `i-${i}`,
        filter: [posts[i].content.category.toLowerCase()],
      })
    }
    setPostsSelected(posts_selected)
    setPostsAvailable(posts_available)

    const isClient = typeof window === "object"
    if (!isClient) {
      return false
    }

    function handleResize() {
      reset(window.innerWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const reset = windowWidth => {
    if (windowWidth === stateRef.current) return
    else {
      setCurrentWindowWidth(windowWidth)

      if (windowWidth > 1200) {
        setCols(3)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "") / 3 -
            16
        )
        setCardHeight(602)
        handleContainerHeight(3, 602)
        onFilter("all")
      } else if (windowWidth > 992 && windowWidth <= 1200) {
        setCols(3)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "") / 3 -
            16
        )
        setCardHeight(600)
        handleContainerHeight(3, 600)
        onFilter("all")
      } else if (windowWidth > 768 && windowWidth <= 992) {
        setCols(2)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "") / 2 -
            14
        )
        setCardHeight(572)
        handleContainerHeight(2, 572)
        onFilter("all")
      } else if (windowWidth > 576 && windowWidth <= 768) {
        setCols(2)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "") / 2 -
            13
        )
        setCardHeight(582)
        handleContainerHeight(2, 582)
        onFilter("all")
      } else if (windowWidth > 375 && windowWidth <= 576) {
        setCols(1)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "")
        )
        setCardHeight(552)
        handleContainerHeight(1, 562)
        onFilter("all")
      } else {
        setCols(1)
        setWidth(
          window.getComputedStyle(itemRef.current).width.replace("px", "")
        )
        setCardHeight(600)
        handleContainerHeight(1, 610)
        onFilter("all")
      }
    }
  }

  const handleContainerHeight = (
    colCount,
    cardHeight,
    value = "all",
    pageNum = 1
  ) => {
    const post_count = getPostCount(value, pageNum)

    if (colCount === 3) {
      if (post_count > 6) setContainerHeight(cardHeight * 3 + 30)
      else if (post_count > 3 && post_count <= 6)
        setContainerHeight(cardHeight * 2 + 30)
      else setContainerHeight(cardHeight + 30)
    } else if (colCount === 2) {
      if (post_count > 8) setContainerHeight(cardHeight * 5 + 30)
      else if (post_count > 6) setContainerHeight(cardHeight * 4 + 30)
      else if (post_count > 4) setContainerHeight(cardHeight * 3 + 30)
      else if (post_count > 2) setContainerHeight(cardHeight * 2 + 30)
      else setContainerHeight(cardHeight * 1 + 30)
    } else {
      setContainerHeight(cardHeight * post_count + post_count * 10)
    }
  }

  const getPostCount = (value, pageNum) => {
    let new_posts = []
    for (let i = 0; i < posts.length; i++) {
      if (
        posts[i].content.category.toLowerCase() === value ||
        value === "all"
      ) {
        new_posts.push({
          ...posts[i].content,
          id: `i-${i}`,
          filter: [posts[i].content.category.toLowerCase()],
        })
      }
    }

    let postsArray = []
    for (let i = (pageNum - 1) * post_limit; i < new_posts.length; i++) {
      if (postsArray.length === 9 || i === posts.length) break
      postsArray.push(new_posts[i])
    }
    return postsArray.length
  }

  const onFilter = (value, nav = false) => {
    let new_posts = []
    for (let i = 0; i < posts.length; i++) {
      if (
        posts[i].content.category.toLowerCase() === value ||
        value === "all"
      ) {
        new_posts.push({
          ...posts[i].content,
          id: `i-${i}`,
          filter: [posts[i].content.category.toLowerCase()],
        })
      }
    }

    setPostsAvailable(new_posts)

    let postsArray = []
    for (let i = 0; i < post_limit; i++) {
      if (i === new_posts.length) break
      postsArray.push(new_posts[i])
    }

    setPostsSelected(postsArray)

    setPageNumber(1)

    updateFilters(state =>
      state.map(f => {
        if (f.label === value)
          return {
            ...f,
            isChecked: true,
          }

        return {
          ...f,
          isChecked: false,
        }
      })
    )

    if (cardHeight !== -1) handleContainerHeight(cols, cardHeight, value)
    if (nav) navigate("/blog#blog-posts")
  }

  const getPaginationNavigation = () => {
    let pagination = []

    for (let i = 0; i < pages; i++) {
      pagination.push(
        <div
          className={`pagination-item ${i === pageNumber - 1 ? "active" : ""}`}
          key={`pagination-` + i}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </div>
      )
    }
    return pagination
  }

  const getCheckedFilter = () => {
    return filters.filter(entry => {
      return entry.isChecked == true
    })[0].label
  }

  const handlePageChange = pageNum => {
    let postsArray = []
    for (
      let i = (pageNum - 1) * 9;
      i < (pageNum - 1) * post_limit + post_limit;
      i++
    ) {
      if (i === postsAvailable.length) break
      postsArray.push(postsAvailable[i])
    }
    setPostsSelected(postsArray)
    setPageNumber(pageNum)
    handleContainerHeight(cols, cardHeight, getCheckedFilter(), pageNum)
    navigate("/blog#blog-posts")
  }

  return (
    <div className="blog-posts" id="blog-posts">
      <div className="filters">
        {filters.map(f => (
          <div
            className={f.isChecked ? "filter selected" : "filter"}
            key={`${f.label}`}
          >
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              onChange={e => onFilter(e.target.value, true)}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </div>
        ))}
      </div>
      <div
        ref={itemRef}
        style={{ height: `${containerHeight}px` }}
        className="iso-wrapper"
      >
        <IsoTopeGrid
          gridLayout={postsSelected}
          noOfCols={cols}
          unitWidth={width}
          unitHeight={cardHeight}
          filters={filters}
        >
          {postsSelected.map(post => (
            <div key={post.id} className={`card ${post.filter[0]}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </IsoTopeGrid>
      </div>
      <div className="pagination">
        <FontAwesomeIcon
          className={`arrow ${pageNumber > 1 ? "" : "disabled"}`}
          icon={faChevronLeft}
          onClick={
            pageNumber > 1 ? () => handlePageChange(pageNumber - 1) : null
          }
        />
        {getPaginationNavigation()}
        <FontAwesomeIcon
          className={`arrow ${pageNumber < pages ? "" : "disabled"}`}
          onClick={
            pageNumber < pages ? () => handlePageChange(pageNumber + 1) : null
          }
          icon={faChevronRight}
        />
      </div>
    </div>
  )
}
