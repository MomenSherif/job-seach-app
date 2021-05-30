import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useAsyncDebounce, usePersistedState, useSelector } from '@hooks';
import SideBar from '@molecules/SideBar';

import styles from './SearchDetails.module.scss';

const SearchSideBar: React.FC = () => {
  const { hash } = useLocation();
  const [history, setHitory] = usePersistedState<string[]>(
    'search-history',
    [],
  );
  const query = useSelector((state) => state.suggestions.query);

  useEffect(() => {
    if (!query) return;
    setHitory((prev) => [...new Set([query, ...prev])].slice(0, 10));
  }, [query, setHitory]);

  useAsyncDebounce(() => {}, 800, [query], { enabled: !!query });

  return (
    <SideBar
      className={`${styles.history} ${
        hash === '#history' ? styles.active : ''
      }`}
      list={history.map((h) => ({
        label: h,
        to: `/search?q=${h}`,
      }))}
      title="Search History"
    />
  );
};

export default SearchSideBar;
