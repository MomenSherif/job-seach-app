import Title from '@atoms/Title';
import JobCard from '@molecules/JobCard';

import React, { useRef } from 'react';

import CardSkeleton from '@skeletons/CardSkeleton';
import { useIntersectionObserver, useJobs, useTotalJobsCount } from '@hooks';
import { repeatElement } from '@utils';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  // TODO: handle error & loading for title
  // TODO: Move Jobs to organism
  const { count } = useTotalJobsCount();
  const { jobs, loading, error, refetch } = useJobs();

  const loaderRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: loaderRef,
    onIntersect: refetch,
    enabled: !loading,
  });

  return (
    <>
      <Title component="h1">All Jobs ({count})</Title>
      <div className={styles['jobs-container']}>
        {jobs.map(({ uuid, title }) => (
          <JobCard key={uuid} title={title} uuid={uuid} />
        ))}
      </div>
      <div ref={loaderRef} className={styles.loader}>
        {loading && repeatElement(12, <CardSkeleton />)}
      </div>
    </>
  );
};

export default Home;
