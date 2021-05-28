import axios from './axiosInstance';

import { Job, Skill } from '@types';

export const getJobs = ({ limit = 12, offset = 0 } = {}): Promise<Job[]> =>
  axios.get('/jobs', { params: { limit, offset } });

export const getJobRelatedSkills = (
  jobID: string,
): Promise<{ skills: Skill[] }> => axios.get(`/jobs/${jobID}/related_skills`);
