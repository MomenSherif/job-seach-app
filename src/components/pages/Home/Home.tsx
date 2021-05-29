import Title from '@atoms/Title';
import JobCard from '@molecules/JobCard';

import CardSkeleton from '@skeletons/CardSkeleton';
import { useJobs, useTotalJobsCount } from '@hooks';
import { repeatElement } from '@utils';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  // TODO: handle error & loading for title
  // TODO: Move Jobs to organism
  const { count } = useTotalJobsCount();
  const { jobs, loading, error, refetch } = useJobs();

  return (
    <>
      <Title component="h1">All Jobs ({count})</Title>
      <div className={styles['jobs-container']}>
        {jobs.map(({ uuid, title }) => (
          <JobCard key={uuid} title={title} uuid={uuid} />
        ))}
        {loading && repeatElement(12, <CardSkeleton />)}
        <button onClick={refetch}>Fetch Next</button>
      </div>
    </>
  );
};

export default Home;
