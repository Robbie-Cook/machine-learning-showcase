import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Text } from "grommet"
// import MediaTemplate from "./mediaTemplate"
import { Menu } from "grommet-icons"

const NavBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fedc37;
  align-items: center;

  & a {
    margin: 0 20px;
  }

  & svg {
    margin: 0 20px;
  }
`

class NavBar extends React.Component {
  render() {
    const NavHeader = styled.div`
      font-weight: bold;
      margin: 0 20px 0 60px;
    `

    const Seperator = styled.div`
      width: 2px;
      height: 23px;
      background-color: #707070;
      margin: 0 10px;
    `

    // TODO: Need to make this appear on mobile
    const StyledMenu = styled(Menu)`
      display: none;
    `

    return (
      <NavBox>
        <StyledMenu />
        <NavHeader>Machine Learning</NavHeader>
        <Seperator />
        <Link to="/">General Overview</Link>
        <Link to="/serial-learning">Serial Learning</Link>
        <Link to="/paper">Paper</Link>
        <Link to="/resources">Resources</Link>
      </NavBox>
    )
  }
}

export default NavBar
