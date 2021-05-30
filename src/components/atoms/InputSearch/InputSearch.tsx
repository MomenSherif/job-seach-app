import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import {
  useDispatch,
  useQueryParams,
  useSelector,
  useAsyncDebounce,
} from '@hooks';
import * as actions from '@actions';
import styles from './InputSearch.module.scss';

// * replace all login here to custom hook | useSearchQPInput()
const InputSearch: React.FC = () => {
  const suggestions = useSelector((state) => state.suggestions.data);
  const dispatch = useDispatch();
  const qp = useQueryParams();

  const q = qp.get('q') ?? '';

  const [query, setQuery] = useState(() => qp.get('q') || '');

  const history = useHistory();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (q && q !== query) setQuery(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useEffect(() => {
    const params = new URLSearchParams();
    const hasAbilityToSearch = query.length >= 3;

    hasAbilityToSearch && params.append('q', query);

    hasAbilityToSearch
      ? history.replace({
          pathname: '/search',
          search: params.toString(),
        })
      : history.replace('/');
  }, [history, query]);

  useAsyncDebounce(
    () => dispatch(actions.fetchSuggestions(query)),
    800,
    [query],
    { enabled: query.length >= 3 },
  );

  return (
    <div className={styles.container}>
      <input
        type="search"
        list="options-list"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search keyword"
        className={styles.input}
        ref={ref}
      />
      <datalist id="options-list">
        {suggestions.map((sug) => (
          <option key={sug.uuid}>{sug.suggestion}</option>
        ))}
      </datalist>
    </div>
  );
};

export default InputSearch;
