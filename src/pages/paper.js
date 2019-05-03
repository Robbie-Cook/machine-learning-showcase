import React from "react"

import Layout from "../components/layout"
import { Text } from "grommet"
import Heading from "../components/heading"
import Spacing from "../components/spacing"
import styled from "styled-components"
import { MajorText } from "../components/text"
import Section from '../components/section'

class Paper extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Heading>My Paper</Heading>

          <MajorText>
            This is my report I wrote while I was at Otago University, about
            serial learning in neual networks.
          </MajorText>

          <Text>
            My project supervisor was Anthony Robins, a professor there, and he
            wrote the original peper on the subject in 1998. A link to it is
            here --- ADD LINK ---.
          </Text>
          <Text />
        </Section>
      </Layout>
    )
  }
}

export default Paper
