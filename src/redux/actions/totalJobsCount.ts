export const SET_TOTAL_JOBS_COUNT = 'SET_TOTAL_JOBS_COUNT';

export interface SetTotalJobsCountAction {
  type: typeof SET_TOTAL_JOBS_COUNT;
  payload: number;
}

export type TotalJobsCountActionTypes = SetTotalJobsCountAction;

export const setTotalJobsCount = (count: number): SetTotalJobsCountAction => ({
  type: SET_TOTAL_JOBS_COUNT,
  payload: count,
});
