import {
  makeAsyncActionCreator,
  makeAsyncReducer,
  makeActionCreator,
  makeReducer,
  composeReducers
} from 'redux-toolbelt'
import { call, put, takeLatest, all, select, fork } from 'redux-saga/effects'
import { createSelector } from 'reselect'
import get from 'lodash.get'
import { rsf } from '../config/firebase'

// API

// Action Creators
export const actionFetchLeaderBoard = makeAsyncActionCreator(
  'FETCH_LEADER_BOARD'
)
export const actionSendScore = makeActionCreator('SEND_SCORE')

// Reducers
const leaderBoardReducer = composeReducers({
  allLeaderBoard: makeAsyncReducer(actionFetchLeaderBoard),
  setScore: makeReducer(actionSendScore)
})

export default leaderBoardReducer

// Sagas
const leaderTransformer = ({ value }) =>
  Object.keys(value).map(key => ({
    ...value[key],
    id: key
  }))

function * fetchLeaderBoard () {
  try {
    yield fork(rsf.database.sync, 'leaderboard', {
      successActionCreator: actionFetchLeaderBoard.success,
      transform: leaderTransformer
    })
  } catch (err) {
    yield put(actionFetchLeaderBoard.failure(err))
  }
}

function * setLeaderScore () {
  try {
    const name = yield select(state => state.leaderBoardReducer.setScore.name)
    const score = yield select(state => state.leaderBoardReducer.setScore.score)
    yield call(rsf.database.create, 'leaderboard', {
      nickname: name || null,
      score: score,
      timestamp: Date.now()
    })
  } catch (err) {
    yield put(actionFetchLeaderBoard.failure(err))
  }
}

function * defaultSaga () {
  yield all([
    takeLatest('FETCH_LEADER_BOARD@ASYNC_REQUEST', fetchLeaderBoard),
    takeLatest('SEND_SCORE', setLeaderScore)
  ])
}

export const sagas = [defaultSaga]

// Selectors
