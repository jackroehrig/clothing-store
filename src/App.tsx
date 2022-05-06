import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Results from './components/Results';
import Navbar from './components/Navbar';
import ShowCollection from './components/ShowCollection';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header> 
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/results/:category' render={() => <Results />} />
        <Route path='/show/collections/:id' render={() => <ShowCollection/>}/>
      </Switch>
    </>
  );
}

export default App;
