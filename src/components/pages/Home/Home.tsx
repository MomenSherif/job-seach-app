import React, { useRef } from 'react';

import Title from '@atoms/Title';
import JobCard from '@molecules/JobCard';
import ErrorFallback from '@molecules/ErrorFallback';
import CardSkeleton from '@skeletons/CardSkeleton';
import { useIntersectionObserver, useJobs, useTotalJobsCount } from '@hooks';
import { repeatElement } from '@utils';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { count, loading: totalLoading } = useTotalJobsCount();
  const { jobs, loading, error, refetch } = useJobs();

  const loaderRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: loaderRef,
    onIntersect: refetch,
    enabled: !loading,
  });

  return (
    <>
      <Title component="h1">All Jobs ({totalLoading ? '...' : count})</Title>
      <div className={styles['jobs-container']}>
        {jobs.map(({ uuid, title }) => (
          <JobCard key={uuid} title={title} uuid={uuid} />
        ))}
      </div>
      {error ? (
        <ErrorFallback error={error} onRetry={refetch} />
      ) : (
        <div ref={loaderRef} className={styles.loader}>
          {loading && repeatElement(12, <CardSkeleton />)}
        </div>
      )}
    </>
  );
};

export default Home;
