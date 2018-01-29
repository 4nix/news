import React, { Component } from 'react'
import Item from './Item'
import style from '../assets/style/solidot.scss'
import config from '../config'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = { list: [], page: 1, val: 0 }
  }

  // fetchData () {
  //   fetch('http://api.local.com/list.php', {
  //     method: 'POST',
  //     body: ''
  //   }).then(response => response.json())
  //   .then(response => { 
  //     console.log(response.data)
  //     let data = [...this.state.list, ...response.data]
  //     this.setState({ list: data })
  //   })
  // }

  fetchData () {
    fetch(config.api, {
      method: 'GET'
    }).then(response => {
      return response.json()
    })
    .then(response => { 
      // console.log(response)
      let data = [...this.state.list, ...response]
      this.setState({ list: data })
    })
  }

  componentWillMount () {
    this.fetchData()
  }

  componentDidMount () {
    this.setState({val: this.state.val + 1})
    console.log('1:', this.state.val)

    this.setState({val: this.state.val + 1})
    console.log('2:', this.state.val)

    this.setState({val: this.state.val + 1})
    console.log('2:', this.state.val)

    setTimeout( () => {
      console.log('3:', this.state.val)
      this.setState({val: this.state.val + 1})
      console.log('3:', this.state.val)

      this.setState({val: this.state.val + 1})
      console.log('4:', this.state.val)
    })
    
    document.body.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

      if (scrollTop >= document.body.scrollHeight - window.innerHeight) {
        // console.log(scrollTop, document.body.scrollHeight - window.innerHeight)
        // this.fetchData()
      }
      
    }
  }

  render () {
    console.log(this.state.list)
    return (
      <div className={style.list}>
        { this.state.list.map((item, index) => <Item key={index} item={item}></Item>) }
      </div>
    )
  }
}

export default List
