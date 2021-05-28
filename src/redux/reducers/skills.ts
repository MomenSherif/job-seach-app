import { ADD_SKILLS } from '../actions/skills';
import { AppActions } from '@actions';
import { Skill } from '@types';

export type SkillRecord = Record<string, Skill>;

interface SkillsState {
  byId: SkillRecord;
  allIds: string[];
}

const initialState: SkillsState = {
  allIds: [],
  byId: {} as SkillRecord,
};

export default function skillsReducer(
  state = initialState,
  action: AppActions,
): SkillsState {
  switch (action.type) {
    case ADD_SKILLS:
      return {
        byId: { ...state.byId, ...action.payload },
        allIds: [...state.allIds, ...action.ids],
      };
    default:
      return state;
  }
}
