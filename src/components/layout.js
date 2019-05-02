import React from "react"
import { Link } from "gatsby"
import {
  Grommet,
  Box,
  Grid,
  Button,
  Calendar,
  DropButton,
  Heading,
  Text,
} from "grommet"

import { Menu } from 'grommet-icons';

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    return (
      <Grommet>
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
          ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="dark-2"
          >
            <Menu />
            <Text>Machine Learning</Text>
            <Link>General Overview</Link>
          </Box>
          {/* <Box gridArea="main" justify="center" align="center">
            <div>
              <main>{this.props.children}</main>
            </div>
          </Box>
          <Box gridArea="footer" justify="center" align="center">
            <footer>
              © {new Date().getFullYear()}, Robbie Cook. Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Box> */}
        </Grid>
      </Grommet>
    )
  }
}

export default Layout
