import React, { Component } from 'react'
import style from '@/assets/style/solidot.scss'

class Item extends Component {
  render () {
    return (
      <div className={style.item}>
        { this.props.subject }
      </div>
    )
  }
}

export default Item
