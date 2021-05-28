import { ThunkAction as ReduxThunkAction } from 'redux-thunk';

import { RootState } from '../store';
import { JobsActionTypes } from './jobs';
import { SkillsActionTypes } from './skills';
import { TotalJobsCountActionTypes } from './totalJobsCount';

export type AppActions =
  | JobsActionTypes
  | SkillsActionTypes
  | TotalJobsCountActionTypes;

export type ThunkAction<T = any> = ReduxThunkAction<
  Promise<T>,
  RootState,
  unknown,
  AppActions
>;

// Action Exports
export { fetchJobs } from './jobs';

export { addSkills } from './skills';

export { setTotalJobsCount } from './totalJobsCount';
