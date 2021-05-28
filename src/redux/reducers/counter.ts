import { INCREMENT, DECREMENT, CounterActionTypes } from '../actions/counter';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// useGlobal ActionTypes for actions
export default function counterReducer(
  state = initialState,
  action: CounterActionTypes,
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.value };

    case DECREMENT:
      return { value: state.value - action.value };

    default:
      return state;
  }
}
