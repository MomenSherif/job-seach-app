import Title from '@atoms/Title';
import JobCard from '@molecules/JobCard';

import CardSkeleton from '@skeletons/CardSkeleton';
import { useJobs } from '@hooks';
import { repepeatElement } from '@utils';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { jobs, loading, error, refetch } = useJobs();

  return (
    <>
      <Title component="h1">All Jobs (255)</Title>
      <div className={styles['jobs-container']}>
        {jobs.map(({ uuid, title }) => (
          <JobCard key={uuid} title={title} uuid={uuid} />
        ))}
        {loading && repepeatElement(12, <CardSkeleton />)}
        <button onClick={refetch}>Fetch Next</button>
      </div>
    </>
  );
};

export default Home;
