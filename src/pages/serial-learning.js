import React from "react"

import Layout from "../components/layout"
import {Text } from "grommet"
import Heading from "../components/heading"
import Spacing from "../components/spacing"
import styled from "styled-components"
import { MajorText } from '../components/text'
import Section from '../components/section'


class SerialLearning extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Heading>Serial Learning in Neural Networks</Heading>
        </Section>
      </Layout>
    )
  }
}

export default SerialLearning
