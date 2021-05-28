import { useDispatch as useReduxDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../redux/store';
import { AppActions } from '@actions';

export default function useDispatch() {
  return useReduxDispatch<ThunkDispatch<RootState, unknown, AppActions>>();
}
