import { useMemo } from 'react';
import useSelector from './useSelector';
import useDispatch from './useDispatch';
import useQuery from './useQuery';
import * as action from '@actions';
import { getJobRelatedSkills } from '@api/jobs';

export default function useSkills(jobID: string) {
  const skillIDs = useSelector((state) => state.jobSkills[jobID]);

  const skills = useSelector((state) => state.skills.byId);
  const dispatch = useDispatch();

  const { loading, data, error, refetch } = useQuery(
    () => getJobRelatedSkills(jobID),
    {
      enable: !skillIDs,
      onSuccess: ({ skills }) => dispatch(action.addSkills(skills, jobID)),
    },
    [jobID],
  );

  const skillsResult = useMemo(
    () => (skillIDs ? skillIDs.map((id) => skills[id]) : data?.skills),
    [skillIDs, data, skills],
  );

  return {
    loading: loading && !skillIDs,
    error,
    skills: skillsResult,
    refetch,
  };
}
