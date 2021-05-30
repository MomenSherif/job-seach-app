import { getJobsAutoComplete } from '@api/jobs';
import { Suggestion } from '@types';
import { ThunkAction } from './';

export const SUGGESTIONS_REQUEST = 'SUGGESTIONS_REQUEST';
export const SUGGESTIONS_SUCCESS = 'SUGGESTIONS_SUCCESS';
export const SUGGESTIONS_ERROR = 'SUGGESTIONS_ERROR';

interface SuggestionsRequestAction {
  type: typeof SUGGESTIONS_REQUEST;
}

interface SuggestionsSuccesstAction {
  type: typeof SUGGESTIONS_SUCCESS;
  suggestions: Suggestion[];
  query: string;
}

interface SuggestionsErrorAction {
  type: typeof SUGGESTIONS_ERROR;
  error: string | number | null;
}

export type SuggestionsActionTypes =
  | SuggestionsRequestAction
  | SuggestionsSuccesstAction
  | SuggestionsErrorAction;

const suggestionsRequest = (): SuggestionsRequestAction => ({
  type: SUGGESTIONS_REQUEST,
});

const suggestionsSuccess = (
  suggestions: Suggestion[],
  query: string,
): SuggestionsSuccesstAction => ({
  type: SUGGESTIONS_SUCCESS,
  suggestions,
  query,
});

const suggestionsError = (
  error: string | number | null,
): SuggestionsErrorAction => ({
  type: SUGGESTIONS_ERROR,
  error,
});

export const fetchSuggestions =
  (searchTerm: string): ThunkAction =>
  (dispatch) => {
    dispatch(suggestionsRequest());

    // !Hint - some jobs has alot of data, make app crashable
    return getJobsAutoComplete(searchTerm)
      .then((suggestions) =>
        dispatch(suggestionsSuccess(suggestions.slice(0, 20), searchTerm)),
      )
      .catch((error: number) => {
        dispatch(suggestionsError(error));
      });
  };
