import { Route, Switch } from 'react-router';

import InputSearch from '@atoms/InputSearch';
import Home from '@pages/Home';
import SearchDetails from '@pages/SearchDetails';

const JobTemplate: React.FC = () => {
  return (
    <>
      <InputSearch />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchDetails} />
      </Switch>
    </>
  );
};

export default JobTemplate;
