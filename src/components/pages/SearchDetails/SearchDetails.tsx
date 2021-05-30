import { shallowEqual } from 'react-redux';

import Title from '@atoms/Title';
import JobCard from '@molecules/JobCard';
import CardSkeleton from '@skeletons/CardSkeleton';
import { useSelector } from '@hooks';
import { repeatElement } from '@utils';
import Layout from '../../templates/Layout';
import styles from './SearchDetails.module.scss';
import SearchSideBar from './SearchSideBar';

const SearchDetails: React.FC = () => {
  const { query, suggestions, loading, error } = useSelector(
    ({ suggestions }) => ({
      loading: suggestions.loading,
      error: suggestions.error,
      suggestions: suggestions.data,
      query: suggestions.query,
    }),
    shallowEqual,
  );

  return (
    <>
      <Layout sidebar={<SearchSideBar />}>
        <Title component="h1">{query ?? '...'}</Title>
        <div className={styles.container}>
          {loading && repeatElement(5, <CardSkeleton />)}
          {suggestions.map(({ uuid, suggestion }) => (
            <JobCard key={uuid} title={suggestion} uuid={uuid} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default SearchDetails;
