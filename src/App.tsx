import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Results from './components/Results';
import Navbar from './components/Navbar';
import Item from './components/Item';
import ShowCollection from './components/ShowCollection';
import { useState } from 'react';

function App() {
  let [cart, updateCart] = useState<any>()

  const handleAdd = (res:any) => {
    updateCart([...cart, res])
  }

  return (
    <>
      <header>
        <Navbar cart={cart}/>
      </header> 
      <Switch>
        <Route exact path='/' render={() => <Home handleAdd={handleAdd}/>} />
        <Route path='/results/:category' render={() => <Results handleAdd={handleAdd}/>} />
        <Route path='/show/collections/:id' render={() => <ShowCollection/>}/>
        <Route path='/:category/:id' render={() => <Item />} />
      </Switch>
    </>
  );
}

export default App;
