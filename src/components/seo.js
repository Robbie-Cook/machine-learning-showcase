/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, keywords, title }) {

  const mytitle = "Machine Learning Showcase"
  const desc = "A website showcasing some aspects of machine learning"
  return (
    <Helmet
      title={mytitle}
      titleTemplate={mytitle}
      meta={[
        {
          name: `description`,
          content: desc,
        },
        {
          property: `og:title`,
          content: mytitle,
        },
        {
          property: `og:description`,
          content: desc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        }
      ]}
    />
  )
}

export default SEO
