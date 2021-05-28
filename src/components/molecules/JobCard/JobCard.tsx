import { Link } from 'react-router-dom';

import Title from '@atoms/Title';
import Tag from '@atoms/Tag';
import JobCardProps from './JobCard.types';
import styles from './JobCard.module.scss';

const JobCard: React.FC<JobCardProps> = ({ title, uuid }) => (
  <article className={styles.card}>
    <header>
      <Title component="h3">{title}</Title>
    </header>
    <section>
      <Title component="h4" className={styles['skills-heading']}>
        Related Skills
      </Title>
      <div className={styles['skills']}>
        <Tag>operation monitoring</Tag>
        <Tag>active listening</Tag>
        <Tag>information ordering</Tag>
        <Tag>operation monitoring</Tag>
        <Tag>active listening</Tag>
        <Tag>information ordering</Tag>
      </div>
    </section>
    <Link to={`/jobs/${uuid}`}>View Job Details</Link>
  </article>
);

export default JobCard;
