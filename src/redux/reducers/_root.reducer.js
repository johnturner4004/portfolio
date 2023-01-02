import { combineReducers } from "redux";

import workHistory from "./work-history.reducer";
import education from './education.reducer';

const rootReducer = combineReducers({workHistory, education});

export default rootReducer;