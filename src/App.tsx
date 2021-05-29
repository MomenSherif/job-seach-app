import { Switch, Route } from 'react-router-dom';

import Container from '@atoms/Container';
import Header from '@organisms/Header';
import Home from '@pages/Home';
import JobDetails from '@pages/JobDetails';
import { useScrollResotration } from '@hooks';

import styles from './App.module.scss';

function App() {
  useScrollResotration();

  return (
    <div className="App">
      <Header />
      <Container className={styles['main-content']}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs/:uuid" component={JobDetails} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
