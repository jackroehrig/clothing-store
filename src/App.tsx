import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Results from './components/Results';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header> 
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/results/:category' render={() => <Results />} />
      </Switch>
    </>
  );
}

export default App;
