import { getOffsetFromLinks, axiosGet } from '@utils';
import { Job, Skill, Suggestion } from '@types';

export const getTotalJobsCount = () => {
  return axiosGet<number, Job[]>('/jobs?limit=1').then((jobs) => {
    const { links } = jobs.pop() as any;
    const offset = getOffsetFromLinks(links, 'last');
    return +offset + 1;
  });
};

export const getJobs = ({ limit = 12, offset = 0 } = {}) =>
  axiosGet<any, Job[]>('/jobs', { params: { limit, offset } });

export const getJobByID = (jobID: string) =>
  axiosGet<any, Job>(`/jobs/${jobID}`);

export const getJobRelatedSkills = (jobID: string) =>
  axiosGet<any, { skills: Skill[] }>(`/jobs/${jobID}/related_skills`);

type JobOmittedNormalizedTitle = Omit<Job, 'normalized_job_title'>;
export const getJobRelatedJobs = (jobID: string) =>
  axiosGet<Job[], { related_job_titles: JobOmittedNormalizedTitle[] }>(
    `/jobs/${jobID}/related_jobs`,
  ).then((data) => data.related_job_titles);

export const getJobsAutoComplete = (searchTerm: string) =>
  axiosGet<any, Suggestion[]>(`/jobs/autocomplete?contains=${searchTerm}`);
