import { combineReducers } from 'redux'
import education from './education.reducer'
import workHistory from './work-history.reducer'

const rootReducer = combineReducers({ workHistory, education })

export default rootReducer
