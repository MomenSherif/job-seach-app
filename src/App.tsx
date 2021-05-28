import { Switch, Route } from 'react-router-dom';

import * as actions from './redux/actions';
import { useDispatch, useSelector } from './hooks';

import './App.scss';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div style={{ textAlign: 'center' }}>
            <h1>Hello World! {count}🌍</h1>
            <button onClick={() => dispatch(actions.increment(1))}>Increment</button>
            <button onClick={() => dispatch(actions.asyncIncrement(2))}>Increment Async</button>
            <button onClick={() => dispatch(actions.decrement(1))}>Decrement</button>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
