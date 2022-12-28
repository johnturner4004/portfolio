import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getWorkHistory(action) {
  try {
    const history = yield axios.get('/api/work-history');
    console.log('HISTORY')
    yield put({ type: 'SET_WORK_HISTORY', payload: history });
  } catch (err) {
    console.error(err);
    console.log('Unable to get work history');
  }
};

export default function* workHistory() {
  yield takeLatest('GET_WORK_HISTORY', getWorkHistory);
};