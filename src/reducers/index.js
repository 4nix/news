import { combineReducers } from 'redux'
import { ListReducer } from './ListReducer'
import { ListItemReducer } from './List/ListItemReducer'

// const def = {
//   loading: true,
//   count: 20,
//   list: []
// }

// const reducer1 = (state = { count: 40 }, action) => {
//   switch (action.type) {
//     case 'GET_LIST':
//       console.log(state, 'reducer')
//       return { ...state, count: state.count+1, loading: false, list: action.list }
//     case 'GET_LIST1':
//       console.log(state, 'reducer 1')
//       return { ...state, loading: false, list: [] }
//     default:
//       return state
//   }
// }

// export default reducer

const postTags = (state = {}, action) => { return 1 }

const rootReducer = combineReducers({
  ListReducer,
  ListItemReducer
})

export default rootReducer
