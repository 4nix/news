export const ListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, list: action.list }
    default:
      return { ...state, list: [] }
  }
}
