import { ThunkAction as ReduxThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface IncrementAction {
  type: typeof INCREMENT;
  value: number;
}

export interface DecrementAction {
  type: typeof DECREMENT;
  value: number;
}

export const increment = (value: number): IncrementAction => ({
  type: 'INCREMENT',
  value,
});

export const decrement = (value: number): DecrementAction => ({
  type: 'DECREMENT',
  value,
});

// async actions
type ThunkAction<T = any> = ReduxThunkAction<
  Promise<T>,
  RootState,
  unknown,
  CounterActionTypes
>;

export const asyncIncrement =
  (value: number): ThunkAction<number> =>
  (dispatch) => {
    // start loading...
    return new Promise((res) => {
      setTimeout(() => {
        console.log(value);

        dispatch({ type: 'INCREMENT', value });
        res(value);
      }, 1000);
    });
  };

export type CounterActionTypes = IncrementAction | DecrementAction;
