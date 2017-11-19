import React, { Component } from 'react'
import style from '../assets/style/solidot.scss'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { length: 80, init: true, click: false }
  }

  formateDate (timestamp) {
    let date = new Date(timestamp * 1000)
    return date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).substr(-2) + '/' + ('0' + date.getDate()).substr(-2)
  }

  formateContent (content) {
    return content.length > this.state.length ? content.substr(0, this.state.length) + '...' : content
  }

  handleClick (e) {
    this.setState({ init: false, click: this.state.click ^ 1 })
  }

  render () {
    return (
      <div className={ this.state.init ? style.itemA : (this.state.click ? style.itemB : style.itemC) } onClick={ e => this.handleClick(e) }>
        <div className={style.itemSubject}>
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

        <div className={style.itemContent}>
          <div className={style.content}>
            { this.formateContent(this.props.item.content) }
          </div>
        </div>
      </div>
    )
  }
}

export default Item
