import React from "react"

class MediaTemplate extends React.Component {
  render() {
    // Taken from styled-components' examples
    const sizes = {
      desktop: 992,
      tablet: 768,
      phone: 576,
    }

    const media = Object.keys(sizes).reduce((acc, label) => {
      acc[label] = (...args) =>
        css`
          @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
          }
        `
      return acc
    }, {})

    return media
  }
}

export default MediaTemplate
