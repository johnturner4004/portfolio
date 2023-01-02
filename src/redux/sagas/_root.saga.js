import { all } from 'redux-saga/effects'

import workHistory from './work-history.saga'
import education from './education.saga'

export default function* rootSaga() {
  yield all([
    workHistory(),
    education(),
  ])
}