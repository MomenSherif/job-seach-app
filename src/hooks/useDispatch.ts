import { useDispatch as useReduxDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../redux/store';
import { CounterActionTypes } from '../redux/actions/counter';

export default function useDispatch() {
  return useReduxDispatch<
    ThunkDispatch<RootState, unknown, CounterActionTypes>
  >();
}
