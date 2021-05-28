import { combineReducers } from 'redux';
import jobsReducer from './jobs';
import skillsReducer from './skills';
import jobSkillsReducer from './jobSkills';
import totalJobsCountReducer from './totalJobsCount';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  skills: skillsReducer,
  jobSkills: jobSkillsReducer,
  totalJobsCount: totalJobsCountReducer,
});
