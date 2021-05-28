import { Link } from 'react-router-dom';

import Tag from '@atoms/Tag';
import TagsSkeleton from '@skeletons/TagsSkeleton';
import { useQuery } from '@hooks';
import { getJobRelatedSkills } from '@api/jobs';
import styles from './Skills.module.scss';

const NUM_OF_SKILLS = 6;

const Skills: React.FC<{ jobID: string }> = ({ jobID }) => {
  const { loading, data, error, refetch } = useQuery(() =>
    getJobRelatedSkills(jobID),
  );

  return (
    <div className={styles.container}>
      {loading ? (
        <TagsSkeleton />
      ) : (
        data?.skills
          .slice(0, NUM_OF_SKILLS)
          .map(({ skill_uuid, skill_name }) => (
            <Link
              to={`/skills/${skill_uuid}`}
              key={skill_uuid}
              style={{ display: 'inline-flex', textDecoration: 'none' }}
            >
              <Tag>{skill_name}</Tag>
            </Link>
          ))
      )}
    </div>
  );
};

export default Skills;
