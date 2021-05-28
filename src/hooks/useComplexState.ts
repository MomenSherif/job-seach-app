import { useReducer } from 'react';

export default function useComplexState<S extends Object>(initialState: S) {
  return useReducer(
    (state: S, updater: Partial<S> | ((state: S) => Partial<S>)) => ({
      ...state,
      ...(typeof updater === 'function' ? updater(state) : updater),
    }),
    initialState,
  );
}
