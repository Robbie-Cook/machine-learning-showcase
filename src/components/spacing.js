import React from "react"

class Spacing extends React.Component {
  render() {
      let styles = {
          width: this.props.width,
          height: this.props.height
      }
      return (
          <div className='spacing' style={styles}></div>
      )
  }
}

export default Spacing
