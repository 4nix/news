import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListItem from '../components/List/ListItem'
import { getList } from '../actions/List'
import style from '../assets/style/List.scss'

class List extends Component {
  constructor (props) {
    super(props)
    // console.log(props.state, this.props, this.props.test, this.props.dispatch({ type: 'GET_LIST1'}))
  }

  componentWillMount () {
    // const { test, getList } = this.props

    // console.log('1', test, this.props)
    // getList()
    // console.log('2', test)
    // const { dispatch } = this.props
    // console.log(dispatch, 1)
    this.props.dispatch(getList())
  }

  componentDidMount () {
    // const { test, getList, getState, dispatch } = this.props
    // console.log('4', test, this.props, getState, dispatch)
  }

  render () {
    const { list } = this.props
    console.log(1,list)

    return (
      <div className={style.list}>
        { list.map((item, index) => <ListItem key={index} item={item}></ListItem>) }
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { ListReducer } = state
  return { list: ListReducer.list }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getList: () => { dispatch({ type: 'GET_LIST' }) }
//   }
// }

export default connect(mapStateToProps)(List)
