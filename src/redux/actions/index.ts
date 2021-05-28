import { ThunkAction as ReduxThunkAction } from 'redux-thunk';

import { RootState } from 'redux/store';
import { JobsActionTypes } from './jobs';
export type AppActions = JobsActionTypes;

export type ThunkAction<T = any> = ReduxThunkAction<
  Promise<T>,
  RootState,
  unknown,
  AppActions
>;

// Action Exports
export { fetchJobs } from './jobs';
