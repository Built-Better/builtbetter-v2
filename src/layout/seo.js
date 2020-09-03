/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import OGImage from "../images/og-full-white.png"

function SEO({
  description,
  lang,
  meta,
  title,
  customOGImage,
  customUrl,
  customDescription,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  // Global State
  const state = useContext(GlobalStateContext)

  // Variable Styles
  const bodyScroll = state.bodyScroll ? "initial" : "hidden"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: customDescription ? customDescription : metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: customDescription ? customDescription : metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: customOGImage
            ? customOGImage
            : `https://builtbetter.tech${OGImage}`,
        },
        {
          property: `og:url`,
          content: customUrl
            ? `https://builtbetter.tech/${customUrl}`
            : `https://builtbetter.tech/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: customDescription ? customDescription : metaDescription,
        },
      ].concat(meta)}
    >
      <style type="text/css">
        {`
          body {
            overflow: ${bodyScroll};
          }
        `}
      </style>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
