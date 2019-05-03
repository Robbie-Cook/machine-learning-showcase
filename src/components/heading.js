import React from "react"
import styled from "styled-components"

class Heading extends React.Component {
  render() {
    const StyledH1 = styled.h1`
      border-bottom: 4px solid #ffae2b;
      display: inline-block;
      margin-top: 20px;
    `
    return <StyledH1>{this.props.children}</StyledH1>
  }
}

export default Heading
