import SideBar from '@molecules/SideBar';
import ErrorFallback from '@molecules/ErrorFallback';
import { getSkillRelatedSkills } from '@api/skills';
import { useQuery } from '@hooks';

const JobSideBar: React.FC<{ skillID: string }> = ({ skillID }) => {
  const { loading, data, error, refetch } = useQuery(
    () => getSkillRelatedSkills(skillID),
    { enable: true },
    [skillID],
  );

  if (error) return <ErrorFallback error={error!} onRetry={refetch} />;

  return (
    <SideBar
      list={data?.map((skill) => ({
        label: skill.skill_name,
        to: `/skills/${skill.uuid}`,
      }))}
      loading={loading}
      title="Related Skills"
    />
  );
};

export default JobSideBar;
