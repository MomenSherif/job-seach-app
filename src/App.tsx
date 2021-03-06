import { Switch, Route } from 'react-router-dom';

import Container from '@atoms/Container';
import Header from '@organisms/Header';
import NotFound404 from '@pages/NotFound404';
import JobTemplate from '@templates/JobTemplate';
import JobDetails from '@pages/JobDetails';
import SkillDetails from '@pages/SkillDetails';
import { useScrollResotration } from '@hooks';

import styles from './App.module.scss';

function App() {
  useScrollResotration();

  return (
    <div className="App">
      <Header />
      <Container className={styles.container}>
        <Switch>
          <Route exact path="/" component={JobTemplate} />
          <Route exact path="/jobs/:uuid" component={JobDetails} />
          <Route exact path="/search" component={JobTemplate} />
          <Route exact path="/skills/:uuid" component={SkillDetails} />
          <Route path="*" component={NotFound404} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
