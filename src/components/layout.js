import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    
    return (
      <div>
        <main>{this.props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Robbie Cook. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
