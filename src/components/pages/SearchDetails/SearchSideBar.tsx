import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

import { usePersistedState, useSelector } from '@hooks';
import SideBar from '@molecules/SideBar';

import styles from './SearchDetails.module.scss';

const SearchSideBar: React.FC = () => {
  const { hash } = useLocation();
  const ref = useRef<HTMLElement>(null);
  const [history, setHitory] = usePersistedState<string[]>(
    'search-history',
    [],
  );
  const query = useSelector((state) => state.suggestions.query);

  useEffect(() => {
    if (!query) return;
    setHitory((prev) => [...new Set([query, ...prev])].slice(0, 10));
  }, [query, setHitory]);

  useEffect(() => {
    if (hash !== '#history') return;

    // TODO: FIX THIS HACK #@%!
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }, [hash]);

  return (
    <SideBar
      ref={ref}
      className={`${styles.history} ${hash === '#history' ? styles.active : ''
        }`}
      list={history.map((h) => ({
        label: h,
        to: `/search?q=${h}`,
        activeClassName: '',
      }))}
      title="Search History"
    />
  );
};

export default SearchSideBar;
