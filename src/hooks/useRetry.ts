import { useReducer } from 'react';

export default function useRetry() {
  return useReducer((state) => !state, false);
}
