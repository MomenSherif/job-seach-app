import { useParams } from 'react-router';
import useSelector from './useSelector';
import useQuery from './useQuery';
import useDispatch from './useDispatch';
import { getJobByID } from '@api/jobs';
import * as actions from '@actions';

export default function useJob(jobID: string) {
  const job = useSelector((state) => state.jobs.byId[jobID]);
  const dispatch = useDispatch();

  const { loading, error, data, refetch } = useQuery(
    () => getJobByID(jobID),
    {
      enable: !job,
      onSuccess: (jobs) => dispatch(actions.addJobs([jobs])),
    },
    [jobID],
  );

  const jobResult = job ?? data;

  return {
    loading: loading && !jobResult,
    error,
    job: jobResult,
    refetch,
  };
}
