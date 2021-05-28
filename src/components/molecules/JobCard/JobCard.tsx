import { Link } from 'react-router-dom';

import Title from '@atoms/Title';
import JobCardProps from './JobCard.types';
import styles from './JobCard.module.scss';
import Skills from '@molecules/Skills';

const JobCard: React.FC<JobCardProps> = ({ title, uuid }) => {
  return (
    <article className={styles.card}>
      <header>
        <Title component="h3">{title}</Title>
      </header>
      <section>
        <Title component="h4" className={styles['skills-heading']}>
          Related Skills
        </Title>
        <Skills jobID={uuid} />
      </section>
      <Link to={`/jobs/${uuid}`}>View Job Details</Link>
    </article>
  );
};

export default JobCard;
