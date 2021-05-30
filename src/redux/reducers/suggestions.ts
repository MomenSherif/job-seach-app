import { AppActions } from '@actions';
import { Suggestion } from '@types';
import {
  SUGGESTIONS_ERROR,
  SUGGESTIONS_REQUEST,
  SUGGESTIONS_SUCCESS,
} from '../actions/suggestions';

interface SuggestionsState {
  loading: boolean;
  error: string | number | null;
  data: Suggestion[];
  query: string | null;
}

const initialState: SuggestionsState = {
  loading: true,
  error: null,
  data: [],
  query: null,
};

export default function suggestionsReudcer(
  state = initialState,
  action: AppActions,
): SuggestionsState {
  switch (action.type) {
    case SUGGESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case SUGGESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SUGGESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.suggestions,
        query: action.query,
      };
    default:
      return state;
  }
}
