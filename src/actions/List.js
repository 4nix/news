import config from '../config'

export const getList = (page = 1, pagesize = 5) => dispatch => {
  return dispatch(fetchPost('', page, pagesize))
}

export const reciveData = (json, page, pagesize) => ({
  type: 'GET_LIST',
  page: page,
  pagesize: pagesize,
  list: json
})

const fetchPost = (url, page, pagesize) => dispatch => {
  return fetch(config.api).then(resposne => resposne.json()).then(json => {
    let result = []
    let start = (page - 1) * pagesize
    let end = start + pagesize
    for (let k in json) {
      if (k >= start) {
        if (k >= end) {
          break
        }
        result.push(json[k])
      }
    }
    dispatch(reciveData(result, page, pagesize))
  })
}

// export const getItemList = list => dispatch => {
//   return dispatch(fetchPost('list', list))
// }