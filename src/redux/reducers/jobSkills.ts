import { AppActions } from '@actions';
import { Skill } from '@types';
import { ADD_SKILLS } from '../actions/skills';

type JobSkillsState = Record<string, string[]>;

const initialState: JobSkillsState = {} as JobSkillsState;

export default function jobSkillsReducer(
  state = initialState,
  action: AppActions,
): JobSkillsState {
  switch (action.type) {
    case ADD_SKILLS:
      return action.jobID
        ? {
            ...state,
            [action.jobID]: action.ids,
          }
        : state;
    default:
      return state;
  }
}
