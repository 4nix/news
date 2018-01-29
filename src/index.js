import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import routes from './routes'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
// import List from './views/List'
// import Datepick from './views/Datepick'

const middleware = [ thunk ]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

// console.log(store)
// store.dispatch({ type: 'GET_LIST' })
// store.dispatch({ type: 'GET_LIST' })
// console.log(10, store.getState())

ReactDOM.render(
  <Provider store={store}>
    { routes() }
  </Provider>, 
  document.getElementById('root'));
// registerServiceWorker();
