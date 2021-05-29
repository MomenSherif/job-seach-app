import axios from './axiosInstance';
import { getOffsetFromLinks } from '@utils';
import { Job, Skill } from '@types';

export const getTotalJobsCount = (): Promise<number> => {
  return axios.get<number, Job[]>('/jobs?limit=1').then((jobs) => {
    const { links } = jobs.pop() as any;
    const offset = getOffsetFromLinks(links, 'last');
    return +offset + 1;
  });
};

export const getJobs = ({ limit = 12, offset = 0 } = {}): Promise<Job[]> =>
  axios.get('/jobs', { params: { limit, offset } });

export const getJobByID = (jobID: string): Promise<Job> =>
  axios.get(`/jobs/${jobID}`);

export const getJobRelatedSkills = (
  jobID: string,
): Promise<{ skills: Skill[] }> => axios.get(`/jobs/${jobID}/related_skills`);

type JobOmittedNormalizedTitle = Omit<Job, 'normalized_job_title'>;
export const getJobRelatedJobs = (
  jobID: string,
): Promise<JobOmittedNormalizedTitle[]> =>
  axios
    .get<Job[], { related_job_titles: JobOmittedNormalizedTitle[] }>(
      `/jobs/${jobID}/related_jobs`,
    )
    .then((data) => data.related_job_titles);
