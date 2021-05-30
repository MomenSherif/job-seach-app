import Skeleton from 'react-loading-skeleton';

import Title from '@atoms/Title';
import NavList from '@molecules/NavList';
import { useMediaQuery } from '@hooks';
import { repeatElement } from '@utils';
import SideBarProps from './SideBar.types';
import styles from './SideBar.module.scss';

const SideBar: React.FC<SideBarProps> = ({
  title,
  loading = false,
  children,
  list,
  className = '',
  ...props
}) => {
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <aside className={`${styles.sidebar} ${className}`} {...props}>
      <Title component="h2" variant="h3" className={styles.title}>
        {title}
      </Title>
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loader}>
            {repeatElement(5, <Skeleton height={40} width="100%" />)}
          </div>
        ) : children ? (
          children
        ) : (
          <NavList
            className={styles.navlist}
            activeClassName={styles.active}
            variant={isLargeScreen ? 'vertical' : 'horizontal'}
            list={list || []}
          />
        )}
      </div>
    </aside>
  );
};

export default SideBar;
