import React, { Component } from 'react'
import style from '../assets/style/solidot.scss'

class Item extends Component {
  formateDate (timestamp) {
    let date = new Date(timestamp * 1000)
    return date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).substr(-2) + '/' + ('0' + date.getDay()).substr(-2)
  }

  render () {
    return (
      <div className={style.item}>
        <h3 className={style.title}>
          { this.props.item.title }
        </h3>
        <div className={style.from}>
          <span className={style.dash}></span>
          <span>{ this.props.item.from }</span>
        </div>
        <div className={style.date}>
          { this.formateDate(this.props.item.timestamp) }
        </div>
      </div>
    )
  }
}

export default Item
