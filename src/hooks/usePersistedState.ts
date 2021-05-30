import { useEffect, useState } from 'react';

export default function usePersistedState<T>(key: string, initialValue?: T) {
  const [state, setState] = useState<T>(() => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}
