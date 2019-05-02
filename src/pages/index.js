import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Navbar />
      </Layout>
    )
  }
}

export default BlogIndex