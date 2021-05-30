import { useMemo } from 'react';

import { useSelector, useDispatch, useQuery } from '@hooks';
import * as action from '@actions';
import { getJobRelatedSkills } from '@api/jobs';
import { Skill } from '@types';

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
