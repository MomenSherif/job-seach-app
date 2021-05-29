import { useEffect, useMemo } from 'react';
import { shallowEqual } from 'react-redux';

import { useSelector, useDispatch, useRetry } from '@hooks';
import * as actions from '@actions';

export default function useJobs() {
  const { loading, error, byId, allIds } = useSelector(
    ({ jobs }) => ({
      loading: jobs.loading,
      error: jobs.error,
      allIds: jobs.allIds,
      byId: jobs.byId,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const [retry, doRetry] = useRetry();

  useEffect(() => {
    if (!allIds.length) dispatch(actions.fetchJobs());
  }, [dispatch, retry]);

  const jobs = useMemo(() => allIds.map((id) => byId[id]), [allIds, byId]);
  return {
    jobs,
    loading,
    error,
    refetch: doRetry,
  };
}
