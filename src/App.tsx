import './App.scss';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Results from './components/Results';
import Navbar from './components/Navbar';
import Item from './components/Item';
import ShowCollection from './components/ShowCollection';
import { useState } from 'react';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import CurrentUserProvider from './contexts/CurrentUser';

function App() {
  let [cart, updateCart] = useState<any>([])
  let [addDisplay, setAddDisplay] = useState('none')


  const handleAdd = (res: any) => {
    updateCart([...cart, res])
  }

  const addPopup = () => {
    setAddDisplay('initial')
  }

  return (
    <CurrentUserProvider style={{position: 'relative'}}>
      <header>
        <Navbar cart={cart} />
      </header>
      <div className="add-popup" style={{ display: addDisplay }}>
        <h4>You Must Be Signed In To Add Items To The Cart</h4>
        <div className="add-popup-buttons">
          <button className='x-button' onClick={() => setAddDisplay('none')}>x</button>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/signup'><button>Signup</button></Link>
        </div>
      </div>
      <Switch>
        <Route exact path='/' render={() => <Home handleAdd={handleAdd} addPopup={addPopup} />} />
        <Route path='/results/:category' render={() => <Results handleAdd={handleAdd} addPopup={addPopup} />} />
        <Route path='/show/collections/:id' render={() => <ShowCollection />} />
        <Route path='/:category/:id' render={() => <Item handleAdd={handleAdd} addPopup={addPopup}/>} />
        <Route path='/signup' render={() => <SignUp />} />
        <Route path='/login' render={() => <LoginForm />} />
      </Switch>
    </CurrentUserProvider>
  );
}

export default App;
