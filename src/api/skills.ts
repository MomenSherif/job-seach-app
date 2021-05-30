import { Skill } from '@types';
import { axiosGet } from '@utils';
import axios from './axiosInstance';

type SkillResponse = Pick<Skill, 'skill_name' | 'description'> & {
  uuid: string;
};

export const getSkill = (skillID: string) =>
  axiosGet<any, SkillResponse>(`/skills/${skillID}`);

export const getSkillRelatedSkills = (skillID: string) =>
  axiosGet<SkillResponse[], { skills: SkillResponse[] }>(
    `/skills/${skillID}/related_skills`,
  ).then((data) => data.skills);

interface JobResponse {
  job_uuid: string;
  job_title: string;
  normalized_job_title: string;
  importance: number;
  level: number;
}

export const getSkillRelatedJobs = (skillID: string): Promise<JobResponse[]> =>
  axiosGet<JobResponse[], { jobs: JobResponse[] }>(
    `/skills/${skillID}/related_jobs`,
  ).then((data) => data.jobs);
