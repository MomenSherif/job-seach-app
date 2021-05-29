import { getTotalJobsCount } from '@api/jobs';
import { useDispatch, useQuery, useSelector } from '@hooks';
import * as action from '@actions';

export default function useTotalJobsCount() {
  const totalJobsCount = useSelector((state) => state.totalJobsCount);
  const dispatch = useDispatch();

  const { loading, data, error, refetch } = useQuery(getTotalJobsCount, {
    enable: !totalJobsCount,
    onSuccess: (count) => dispatch(action.setTotalJobsCount(count)),
  });

  const count = totalJobsCount ?? data;

  return {
    loading: loading && count == null,
    error,
    count: count,
    refetch,
  };
}
