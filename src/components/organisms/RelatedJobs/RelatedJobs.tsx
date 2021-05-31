import Title from '@atoms/Title';
import InfoCard from '@molecules/InfoCard';
import ErrorFallback from '@molecules/ErrorFallback';
import CardSkeleton from '@skeletons/CardSkeleton';
import { useQuery } from '@hooks';
import { repeatElement } from '@utils';
import { getSkillRelatedJobs } from '@api/skills';
import styles from './RelatedJobs.module.scss';

const RelatedJobs: React.FC<{ skillID: string; }> = ({ skillID }) => {
  const { data, loading, error, refetch } = useQuery(
    () => getSkillRelatedJobs(skillID),
    { enable: true },
    [skillID],
  );

  return (
    <section className={styles.section}>
      <Title component="h2" variant="h3" className={styles.title}>
        Related Jobs
      </Title>
      <div className={styles.skills}>
        {loading
          ? repeatElement(5, <CardSkeleton height={170} />)
          : !error &&
          data?.map((job) => (
            <InfoCard
              key={job.job_uuid}
              to={`/jobs/${job.job_uuid}`}
              title={job.job_title}
              tags={[
                { label: 'Importance', value: job.importance },
                { label: 'Level', value: job.level },
              ]}
            />
          ))}
        {error && <ErrorFallback error={error} onRetry={refetch} />}
      </div>
    </section>
  );
};

export default RelatedJobs;
