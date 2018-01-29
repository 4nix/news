export const ListReducer = (state = { page: 1, list: [] }, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, page: action.page, pagesize: action.pagesize, list: [...state.list, ...action.list] }
    default:
      return { ...state, list: [] }
  }
}
