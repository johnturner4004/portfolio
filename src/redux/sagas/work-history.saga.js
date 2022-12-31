import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getWorkHistory(action) {
  try {
    const history = yield axios.get('/api/work-history');
    yield put({ type: 'SET_WORK_HISTORY', payload: history });
  } catch (err) {
    console.error(err);
    console.log('Unable to get work history');
  }
};

function* newWorkHistory(action) {
  try {
    const newEntry = action.payload;
    yield axios.post('/api/work-history/new', newEntry);
  } catch (err) {
    console.error(err, 'Error adding new job to work-history');
  }
}

function* updateWorkHistory(action) {
  try {
    const update = action.payload;
    yield axios.put('/api/work-history/update', update);
  } catch (err) {
    console.error(err, 'Error while updating work history');
  }
}

export default function* workHistory() {
  yield takeLatest('GET_WORK_HISTORY', getWorkHistory);
  yield takeLatest('NEW_WORK_HISTORY', newWorkHistory);
  yield takeLatest('UPDATE_WORK_HISTORY', updateWorkHistory);
};