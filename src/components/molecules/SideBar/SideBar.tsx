import Skeleton from 'react-loading-skeleton';

import Title from '@atoms/Title';
import NavList from '@molecules/NavList';
import { useMediaQuery } from '@hooks';
import { repeatElement } from '@utils';
import SideBarProps from './SideBar.types';
import styles from './SideBar.module.scss';

const SideBar: React.FC<SideBarProps> = ({
  title,
  loading,
  children,
  list,
}) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <aside className={styles.sidebar}>
      <Title component="h2" variant="h3" className={styles.title}>
        {title}
      </Title>
      <div className={styles.content}>
        {loading ? (
          repeatElement(5, <Skeleton height={40} width="100%" />)
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
