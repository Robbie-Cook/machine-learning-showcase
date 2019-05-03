import React from "react"
import NavBar from "./navbar.js"
import SEO from './seo'
import styled from 'styled-components'
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

const Main = styled.div`
margin: 20px 60px;
`


class Layout extends React.Component {
  render() {
    return (
      <Grommet>
        <SEO />
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={
            [
              { name: "header", start: [0, 0], end: [1, 0] },
              { name: "main", start: [0, 1], end: [1, 1] }
            ]}
        >
          <Box gridArea="header">
            <NavBar />
          </Box>
          <Box gridArea="main">
            <Main>
              {this.props.children}
            </Main>
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default Layout
