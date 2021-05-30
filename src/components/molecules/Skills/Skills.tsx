import { Link } from 'react-router-dom';

import Tag from '@atoms/Tag';
import TagsSkeleton from '@skeletons/TagsSkeleton';
import { useSkills } from '@hooks';
import styles from './Skills.module.scss';
import ErrorFallback from '@molecules/ErrorFallback';

const NUM_OF_SKILLS = 6;

const Skills: React.FC<{ jobID: string }> = ({ jobID }) => {
  const { skills, loading, error } = useSkills(jobID);

  return (
    <div className={styles.container}>
      {loading ? (
        <TagsSkeleton />
      ) : (
        <>
          {!error &&
            skills
              ?.slice(0, NUM_OF_SKILLS)
              .map(({ skill_uuid, skill_name }) => (
                <Link
                  to={`/skills/${skill_uuid}`}
                  key={skill_uuid}
                  style={{ display: 'inline-flex', textDecoration: 'none' }}
                >
                  <Tag>{skill_name}</Tag>
                </Link>
              ))}
          {(error || !skills?.length) && (
            <ErrorFallback error={error!} message="No skills.." />
          )}
        </>
      )}
    </div>
  );
};

export default Skills;
