import { makeAsyncActionCreator, makeAsyncReducer } from 'redux-toolbelt'
import { call, put, takeLatest, all } from 'redux-saga/effects'

// API
export const getLocalStorage = async () => {
  const data = localStorage
  try {
    return await data
  } catch (err) {
    return err
  }
}

// Action Creators
export const actionLocalStorage = makeAsyncActionCreator('FETCH_LOCAL_STORAGE')

// Reducers
const localStorageReducer = makeAsyncReducer(actionLocalStorage)

export default localStorageReducer

// Sagas
function * fetchLocalStorage () {
  try {
    const response = yield call(getLocalStorage)
    yield put(actionLocalStorage.success(response))
  } catch (err) {
    yield put(actionLocalStorage.failure(err))
  }
}

function * defaultSaga () {
  yield all([
    takeLatest('FETCH_LOCAL_STORAGE@ASYNC_REQUEST', fetchLocalStorage)
  ])
}

export const sagas = [defaultSaga]

// Selectors
