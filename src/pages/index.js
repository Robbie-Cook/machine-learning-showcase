import React from "react"

import Layout from "../components/layout"
import {Text } from "grommet"
import Heading from "../components/heading"
import Spacing from "../components/spacing"
import styled from "styled-components"
import { MajorText } from '../components/text'
import Section from '../components/section'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Heading>A note on machine learning</Heading>

          <MajorText>
            Machine learning," in the abstract, is the ability of computers to
            improve their performance of a given task, given feedback.
          </MajorText>
          <Text>
            In the practical, machine learning is a set of techniques developed
            to help computers perform tasks that computers usually find
            difficult to do, for example, to recognise faces. Not all machine
            learning techniques actually involve any learning at all, for
            example, decision trees. Machine learning varies a lot depending on
            the type of task it is given. A classification task is a task where
            a label is given to a certain type of data. For example, "Is this
            picture a giraffe?" is a classification task with two labels --
            "giraffe", and "not a giraffe". Classification tasks get more
            difficult when there are a lot of categories, e.g. "What is this
            meme?" is a classification task with a lot of categories.
            Reinforcement learning is a task like "what is the best way to jump
            over this fence?" Feedback is not immediately calculable, but still
            exists.
          </Text>
        </Section>

        <Section>
          <Heading>Neural Networks</Heading>

          <MajorText>
            "Neural networks" are the sexiest, sauciest parts of machine
            learning.
          </MajorText>
          <Text>
            Neural networks are very popular in the machine learning world,
            especially for image recognition...
          </Text>
        </Section>
      </Layout>
    )
  }
}

export default Index
