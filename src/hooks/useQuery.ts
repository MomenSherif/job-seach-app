import { useEffect, useRef } from 'react';

import useComplexState from './useComplexState';
import useRetry from './useRetry';

export default function useQuery<T = any>(
  promiseFn: () => Promise<T>,
  deps: React.DependencyList = [],
) {
  const [state, setState] = useComplexState<{
    loading: boolean;
    data: T | null;
    error: string | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  const [retry, doRetry] = useRetry();
  const promiseFnRef = useRef(promiseFn);

  useEffect(() => {
    if (!state.loading) setState({ loading: true });

    promiseFnRef
      .current()
      .then((data) => setState({ data, loading: false }))
      .catch((error: string) => setState({ error, loading: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, retry]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    refetch: doRetry,
  };
}
