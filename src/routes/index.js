import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import List from '../views/List'
import Datepick from '../views/Datepick'

// const routes = store => {
//   return (
//     <Router>
//       <Route path="/" component={List}>
//         <IndexRoute component={List} />
//         <route path="/d/:date" component={List} />
//         <route path="/date" component={Datepick} />
//       </Route>
//     </Router>
//   )
// }

// export default routes

const routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={List}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/d/:date" component={Datepick}></Route>
      </div>
    </Router>
  )
}

export default routes
