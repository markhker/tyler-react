import React from 'react'
import { Switch, HashRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import importedComponent from 'react-imported-component'
import styles from './styles.css'

import Home from '../Home'
import Loading from '../../components/Loading'

const AsyncDynamicPage = importedComponent(
  () => require(/* webpackChunkName:'DynamicPage' */ '../DynamicPage'),
  { LoadingComponent: Loading }
)
const AsyncNoMatch = importedComponent(
  () => require(/* webpackChunkName:'NoMatch' */ '../NoMatch'),
  { LoadingComponent: Loading }
)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dynamic' component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default hot(module)(App)
