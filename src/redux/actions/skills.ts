import { normalize, schema } from 'normalizr';

import { Skill } from '@types';
import { SkillRecord } from '../reducers/skills';

export const ADD_SKILLS = 'ADD_SKILLS';

const skillEntity = new schema.Entity(
  'Skills',
  {},
  { idAttribute: 'skill_uuid' },
);

export interface AddSkillsAction {
  type: typeof ADD_SKILLS;
  payload: SkillRecord;
  ids: string[];
  jobID?: string;
}

export type SkillsActionTypes = AddSkillsAction;

export const addSkills = (skills: Skill[], jobID?: string): AddSkillsAction => {
  const { entities, result } = normalize(skills, [skillEntity]);
  return {
    type: ADD_SKILLS,
    payload: entities.Skills as SkillRecord,
    ids: result,
    jobID,
  };
};
