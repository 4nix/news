import React, { Component } from 'react'
import style from '../assets/style/solidot.scss'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      length: 80, 
      init: true, 
      reverse: false, 
      expand: false, 
      class: '', 
      backClass: '',
      click: false, 
      doubleClick: false, 
      clickCount: 0, 
      timer: null ,
      content: '',
      expandEnable: false
    }
  }

  componentDidMount () {
    // console.log('aa')
    this.setState({ expandEnable: this.props.item.content.length > this.state.length })
    this.setState({ content: this.formateContent(this.props.item.content) })
  }

  formateDate (timestamp) {
    let date = new Date(timestamp * 1000)
    return date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).substr(-2) + '/' + ('0' + date.getDate()).substr(-2)
  }

  formateContent (content) {
    // console.log(this.state.expandEnable ? content.substr(0, this.state.length) + '...' : content)
    return this.props.item.content.length > this.state.length  ? content.substr(0, this.state.length) + '...' : content
  }

  handleClick (e) {
    // this.setState({ init: false, click: this.state.click ^ 1 })

    console.log(this.state.clickCount)
    this.setState({ clickCount: ++this.state.clickCount })
    this.checkClick()
  }

  setToFront () {
    this.setState({ class: style.tofront, reverse: false })
  }

  setToBack () {
    this.setState({ class: style.toback, reverse: true })
  }

  setExpand () {
    this.setState({ backClass: style.expandback, expand: true, content: this.props.item.content, })
  }

  setCollapse () {
    this.setState({ backClass: style.collapseback, expand: false, content: this.formateContent(this.props.item.content) })
  }

  checkClick () {
    clearTimeout(this.state.timer)
    let timer = setTimeout(() => {

      if (this.state.clickCount > 1 && this.state.reverse) {
        // console.log(this.state.clickCount, '1')
        this.setState({ doubleClick: true, click: false, clickCount: 0 })
        this.state.expand ? this.setCollapse() : this.setExpand()
      } else {
        // console.log(this.state.clickCount, '2')
        this.setState({ doubleClick: false, click: true, clickCount: 0 })
        this.state.reverse ? (this.state.expand ? this.setCollapse() : this.setToFront()) : this.setToBack()
      }
    }, 400)

    this.setState({ timer: timer })
  }

  render () {
    return (
      <div className={ style.item + ' ' + this.state.class } onClick={ e => this.handleClick(e) }>
        <div className={style.itemFront}>
          <h3 className={style.title}>
            { this.props.item.title }
          </h3>
          <div className={style.from}>
            <span className={style.dash}></span>
            <span>{ this.props.item.from || '匿名' }</span>
          </div>
          <div className={style.date}>
            { this.formateDate(this.props.item.timestamp) }
          </div>
        </div>

        <div className={ style.itemBack + ' ' + this.state.backClass }>
          <div className={style.content}>
            { this.state.content }
          </div>
        </div>
      </div>
    )
  }
}

export default Item
