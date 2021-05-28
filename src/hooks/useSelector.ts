import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import { RootState } from '../redux/store';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;
