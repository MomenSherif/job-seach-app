import { Link } from 'react-router-dom';

import Tag from '@atoms/Tag';
import Title from '@atoms/Title';
import styles from './InfoCard.module.scss';

interface Tag {
  label: string;
  value: string | number;
}

type InfoCardProps = {
  to: string;
  title: string;
  description?: string;
  tags: Tag[];
};

const InfoCard: React.FC<InfoCardProps> = ({
  to,
  title,
  description,
  tags,
}) => {
  return (
    <article className={styles.card}>
      <header>
        <Title component="h3">
          <Link to={to}>{title}</Link>
        </Title>
      </header>
      {description && <p>{description}</p>}

      <div className={styles.tags}>
        {tags.map(({ label, value }) => (
          <Tag key={label} variant="text">
            <strong>{label}:</strong>
            <span>{value}</span>
          </Tag>
        ))}
      </div>
    </article>
  );
};

export default InfoCard;
