import { all } from 'redux-saga/effects'

import workHistory from './work-history.saga'

export default function* rootSaga() {
  yield all([
    workHistory(),
  ])
}