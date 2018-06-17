import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as reducers from './reducers/reducers'
import rootSaga from './reducers/sagas'
import App from './pages/App'

const sagaMiddleware = createSagaMiddleware()

// Creating the redux store and attaching the saga middleware
const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// Runs sagas in app init
rootSaga.forEach(saga => sagaMiddleware.run(saga))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
