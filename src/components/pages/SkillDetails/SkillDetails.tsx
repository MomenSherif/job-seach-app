import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';

import Title from '@atoms/Title';
import RelatedJobs from '@organisms/RelatedJobs';
import { useSkill } from '@hooks';
import Layout from '../../templates/Layout';
import SkillSideBar from './SkillSideBar';
import styles from './SkillDetails.module.scss';

const JobDetails: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { skill, loading, error, refetch } = useSkill(uuid);

  return (
    <>
      <header className={styles.header}>
        {loading ? (
          <Skeleton height={60} width="60vw" />
        ) : (
          <>
            <Title component="h1">{skill?.skill_name}</Title>
          </>
        )}
      </header>
      <Layout sidebar={<SkillSideBar skillID={uuid} />}>
        <RelatedJobs skillID={uuid} />
      </Layout>
    </>
  );
};

export default JobDetails;
