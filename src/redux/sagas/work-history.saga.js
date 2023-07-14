import { put, takeLatest } from 'redux-saga/effects'

import axios from 'axios'

function* getWorkHistory() {
  try {
    const history = yield axios.get('/api/work-history')
    yield put({ type: 'SET_WORK_HISTORY', payload: history })
  } catch (err) {
    console.error(err)
    console.log('Unable to get work history')
  }
}

function* newWorkHistory(action) {
  try {
    const newEntry = action.payload
    yield axios.post('/api/work-history/new', newEntry)
  } catch (err) {
    console.error(err, 'Error adding new job to work-history')
  }
}

function* updateWorkHistory(action) {
  try {
    const update = action.payload
    yield axios.put('/api/work-history/update', update)
  } catch (err) {
    console.error(err, 'Error while updating work history')
  }
}

function* deleteWorkHistory(action) {
  const id = action.payload
  const response = yield axios.delete(`/api/work-history/delete/${id}`)
  console.log(response.status)
  yield put({ type: 'GET_WORK_HISTORY' })
}

export default function* workHistory() {
  yield takeLatest('GET_WORK_HISTORY', getWorkHistory)
  yield takeLatest('NEW_WORK_HISTORY', newWorkHistory)
  yield takeLatest('UPDATE_WORK_HISTORY', updateWorkHistory)
  yield takeLatest('DELETE_WORK_HISTORY', deleteWorkHistory)
}
