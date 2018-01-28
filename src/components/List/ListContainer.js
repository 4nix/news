import React, { Component } from 'react'
import style from './ListContainer.scss'
import ListItem from './ListItem'

export default class ListContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    const { list } = this.props

    return (
      <div className={style.list}>
        
      </div>
      )
  }
}
