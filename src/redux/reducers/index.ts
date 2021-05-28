import { combineReducers } from 'redux';
import jobsReducer from './jobs';
import skillsReducer from './skills';
import jobSkillsReducer from './jobSkills';

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  skills: skillsReducer,
  jobSkills: jobSkillsReducer,
});
