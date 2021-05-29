import { Link } from 'react-router-dom';

import Container from '@atoms/Container';
import NavList from '@molecules/NavList';

import { Link as LinkType } from '../../molecules/NavList/NavList.types';
import styles from './Header.module.scss';

const NAV_LINKS: LinkType[] = [
  { label: 'Home', to: '/' },
  { label: 'Search', to: '/search' },
  { label: 'History', to: '/search#history', activeClassName: '' },
];

const Header: React.FC = () => (
  <header className={styles.header}>
    <Container className={styles['container']}>
      <div>
        <Link to="/" className={styles.logo}>
          JobsNow
        </Link>
      </div>
      <div>
        <NavList list={NAV_LINKS} />
      </div>
    </Container>
  </header>
);

export default Header;
