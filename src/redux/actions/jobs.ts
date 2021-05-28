import { normalize, schema } from 'normalizr';

import { getNextOffsetFromLinks } from '@utils';
import { JobRecord } from '../reducers/jobs';
import { Job } from '@types';
import { ThunkAction } from '@actions';
import { getJobs } from '@api/jobs';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR';

const jobEntity = new schema.Entity('Jobs', {}, { idAttribute: 'uuid' });

export interface FetchJobsRequestAction {
  type: typeof FETCH_JOBS_REQUEST;
}

export interface FetchJobsSuccessAction {
  type: typeof FETCH_JOBS_SUCCESS;
  payload: JobRecord;
  ids: string[];
  offset?: number;
}

export interface FetchJobsErrorAction {
  type: typeof FETCH_JOBS_ERROR;
  error: string;
}

export type JobsActionTypes =
  | FetchJobsSuccessAction
  | FetchJobsRequestAction
  | FetchJobsErrorAction;

export const fetchJobsRequest = (): FetchJobsRequestAction => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs: Job[]): FetchJobsSuccessAction => {
  // TODO: Add types to links
  const { links } = jobs.pop() as any;
  const offset = getNextOffsetFromLinks(links);

  const { entities, result } = normalize(jobs, [jobEntity]);

  return {
    type: FETCH_JOBS_SUCCESS,
    payload: entities.Jobs as JobRecord,
    ids: result,
    offset: +offset,
  };
};

export const fetchJobsError = (error: string): FetchJobsErrorAction => ({
  type: FETCH_JOBS_ERROR,
  error,
});

export const fetchJobs = (): ThunkAction => (dispatch, getState) => {
  dispatch(fetchJobsRequest());
  const {
    jobs: { offset },
  } = getState();

  return getJobs({ offset })
    .then((jobs) => {
      dispatch(fetchJobsSuccess(jobs));
    })
    .catch((error: string) => {
      dispatch(fetchJobsError(error));
    });
};
