import TagProps from './Tag.types';
import styles from './Tag.module.scss';

const Tag: React.FC<TagProps> = ({
  className = '',
  variant = 'contained',
  ...props
}) => (
  <div className={`${styles.tag} ${styles[variant]} ${className}`} {...props} />
);

export default Tag;
