import { AppActions } from '@actions';
import { SET_TOTAL_JOBS_COUNT } from '../actions/totalJobsCount';

type TotalJobsCountState = number | null;

const initialState: TotalJobsCountState = null;

export default function totalJobsCountReducer(
  state = initialState,
  action: AppActions,
): TotalJobsCountState {
  switch (action.type) {
    case SET_TOTAL_JOBS_COUNT:
      return action.payload;

    default:
      return state;
  }
}
