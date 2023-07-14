import { put, takeLatest } from 'redux-saga/effects'

import axios from 'axios'

function* getEducation() {
  try {
    const educationEntry = yield axios.get('/api/education')
    yield put({ type: 'SET_EDUCATION', payload: educationEntry })
  } catch (err) {
    console.error(err)
    console.error('Unable to get education')
  }
}

function* newEducation(action) {
  try {
    const newEntry = action.payload
    yield axios.post('/api/education/new', newEntry)
  } catch (err) {
    console.error(err, 'Error adding new school to education')
  }
}

function* updateEducation(action) {
  try {
    const update = action.payload
    yield axios.put('/api/education/update', update)
  } catch (err) {
    console.error(err, 'Error while updating education')
  }
}

function* deleteEducation(action) {
  const id = action.payload
  yield axios.delete(`/api/education/delete/${id}`)
  yield put({ type: 'GET_EDUCATION' })
}

export default function* education() {
  yield takeLatest('GET_EDUCATION', getEducation)
  yield takeLatest('NEW_EDUCATION', newEducation)
  yield takeLatest('UPDATE_EDUCATION', updateEducation)
  yield takeLatest('DELETE_EDUCATION', deleteEducation)
}
