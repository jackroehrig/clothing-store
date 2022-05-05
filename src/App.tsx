import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Results from './components/Results';

function App() {

  return (
    <>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/results/:category'>
          <Results/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
