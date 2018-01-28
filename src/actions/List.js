import config from '../config'

export const getList = (list, page = 1) => dispatch => {
  return dispatch(fetchPost('', page))
}

export const reciveData = json => ({
  type: 'GET_LIST',
  list: json
})

const fetchPost = (url, page) => dispatch => {
  return fetch(config.api).then(resposne => resposne.json()).then(json => {
    dispatch(reciveData(json))
  })
}

// export const getItemList = list => dispatch => {
//   return dispatch(fetchPost('list', list))
// }