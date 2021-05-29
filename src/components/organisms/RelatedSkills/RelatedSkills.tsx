import Title from '@atoms/Title';
import InfoCard from '@molecules/InfoCard';
import CardSkeleton from '@skeletons/CardSkeleton';
import { useSkills } from '@hooks';
import { repeatElement } from '@utils';
import styles from './RelatedSkills.module.scss';
import ErrorFallback from '@molecules/ErrorFallback';

const RelatedSkills: React.FC<{ jobID: string }> = ({ jobID }) => {
  const { skills, loading, error, refetch } = useSkills(jobID);

  return (
    <section className={styles.section}>
      <Title component="h2" variant="h3" className={styles.title}>
        Related Skills
      </Title>
      <div className={styles.skills}>
        {loading
          ? repeatElement(5, <CardSkeleton height={170} />)
          : skills?.map((skill) => (
              <InfoCard
                key={skill.skill_uuid}
                to={`/skills/${skill.skill_uuid}`}
                title={skill.skill_name}
                description={skill.description}
                tags={[
                  { label: 'Type', value: skill.skill_type },
                  { label: 'Importance', value: skill.importance },
                  { label: 'Level', value: skill.level },
                ]}
              />
            ))}
        {error && <ErrorFallback error={error} onRetry={refetch} />}
      </div>
    </section>
  );
};

export default RelatedSkills;
