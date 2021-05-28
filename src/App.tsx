import { Switch, Route } from 'react-router-dom';

import Container from '@atoms/Container';
import Header from '@organisms/Header';
import Home from '@pages/Home';
import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Container as="main" className={styles['main-content']}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
