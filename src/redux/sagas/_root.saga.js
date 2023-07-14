import { all } from 'redux-saga/effects'
import education from './education.saga'
import workHistory from './work-history.saga'

export default function* rootSaga() {
  yield all([
    workHistory(),
    education(),
  ])
}
