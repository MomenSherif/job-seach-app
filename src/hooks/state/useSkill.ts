import { useQuery } from '@hooks';
import { getSkill } from '@api/skills';

export default function useSkill(skillID: string) {
  const { loading, error, data, refetch } = useQuery(
    () => getSkill(skillID),
    {
      enable: true,
    },
    [skillID],
  );

  return {
    loading: loading,
    error,
    skill: data,
    refetch,
  };
}
