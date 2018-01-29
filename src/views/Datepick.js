import React, { Component } from 'react'
import { connect } from 'react-redux'

class Datepick extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>date pick</div>
      )
  }
}

export default connect()(Datepick)
