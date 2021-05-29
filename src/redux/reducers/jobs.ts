import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  ADD_JOBS,
} from '../actions/jobs';
import { AppActions } from '@actions';
import { Job } from '@types';

export type JobRecord = Record<string, Job>;

interface JobsState {
  loading: boolean;
  error: string | null;
  byId: JobRecord;
  allIds: string[];
  offset: number;
}

const initialState: JobsState = {
  loading: true,
  error: null,
  allIds: [],
  byId: {} as JobRecord,
  offset: 0,
};

export default function jobsReducer(
  state = initialState,
  action: AppActions,
): JobsState {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        byId: { ...state.byId, ...action.payload },
        allIds: [...state.allIds, ...action.ids],
        offset: action.offset ?? state.offset,
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_JOBS:
      return {
        ...state,
        byId: { ...state.byId, ...action.payload },
        allIds: [...state.allIds, ...action.ids],
      };
    default:
      return state;
  }
}
