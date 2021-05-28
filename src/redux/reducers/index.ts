import { combineReducers } from 'redux';
import jobsReducer from './jobs';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
});
