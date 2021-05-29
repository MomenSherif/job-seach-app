import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';

import Title from '@atoms/Title';
import RelatedSkills from '@organisms/RelatedSkills';
import { useJob } from '@hooks';
import Layout from '../../templates/Layout';
import JobSideBar from './JobSideBar';
import styles from './JobDetails.module.scss';

const JobDetails: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { job, loading, error, refetch } = useJob(uuid);
  return (
    <>
      <header className={styles.header}>
        {loading ? (
          <Skeleton height={60} width="60vw" />
        ) : (
          <Title component="h1">{job.title}</Title>
        )}
      </header>
      <Layout sidebar={<JobSideBar jobID={uuid} />}>
        <RelatedSkills jobID={uuid} />
      </Layout>
    </>
  );
};

export default JobDetails;
