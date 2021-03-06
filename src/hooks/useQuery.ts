import { useEffect, useRef } from 'react';

import { useComplexState, useRetry } from '@hooks';
import { PromiseWithCancel } from '@utils';
interface Options<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  enable?: boolean;
}

export default function useQuery<T = any>(
  promiseFn: () => PromiseWithCancel<T>,
  options: Options<T> = {
    enable: true,
  },
  deps: any[] = [],
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
  const promiseFnRef = useRef<typeof promiseFn>();
  promiseFnRef.current = promiseFn;

  const { enable } = options;

  useEffect(() => {
    if (!enable || !promiseFnRef.current) return;

    if (!state.loading) setState({ loading: true, error: null });

    const promiseResult = promiseFnRef.current();

    promiseResult
      .then((data) => {
        setState({ data, loading: false });
        options?.onSuccess?.(data);
      })
      .catch((error: string) => {
        setState({ error, loading: false });
        options?.onError?.(error);
      });

    return () => promiseResult.cancel?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enable, retry]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    refetch: doRetry,
  };
}
