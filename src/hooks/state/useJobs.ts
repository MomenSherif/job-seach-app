import { useEffect, useMemo } from 'react';
import { shallowEqual } from 'react-redux';

import { useSelector, useDispatch } from '@hooks';
import * as actions from '@actions';

export default function useJobs() {
  const offset = useSelector((state) => state.jobs.offset);
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

  useEffect(() => {
    if (offset === 0) dispatch(actions.fetchJobs());
  }, [dispatch, offset]);

  const jobs = useMemo(() => allIds.map((id) => byId[id]), [allIds, byId]);
  return {
    jobs,
    loading,
    error,
    refetch: () => dispatch(actions.fetchJobs()),
  };
}
