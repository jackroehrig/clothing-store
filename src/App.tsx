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
import Cart from './components/Cart';

function App() {
  let [addDisplay, setAddDisplay] = useState('none')
  let [nav, setNav] = useState(0)

  if(localStorage.getItem('cart') === null){
    localStorage.setItem('cart', JSON.stringify([]))
  }


  const handleAdd = (res: any) => {
    let previousCart:string | null = localStorage.getItem('cart')
    let newCart = [...JSON.parse(previousCart as string), res]
    localStorage.setItem('cart', JSON.stringify(newCart))
    nav === 0 ? setNav(1) : setNav(0)
  }

  const handleDelete = (name : string) => {
    let previousCart: string | null = localStorage.getItem('cart')
    let previousObj : any[] = JSON.parse(previousCart as string)
    let newObj = previousObj.filter((obj) => {
      if(obj.name === name){
        return false
      }
      return true
    })
    localStorage.setItem('cart', JSON.stringify(newObj))
    nav === 0 ? setNav(1) : setNav(0)
  }

  const addPopup = () => {
    setAddDisplay('initial')
  }

  return (
    <CurrentUserProvider style={{position: 'relative'}}>
      <header>
        {nav === 0 ? <Navbar addPopup={addPopup}/> : <Navbar addPopup={addPopup}/>}
      </header>
      <div className="add-popup" style={{ display: addDisplay }}>
        <h4>You Must Be Signed In To Do That</h4>
        <div className="add-popup-buttons">
          <button className='x-button' onClick={() => setAddDisplay('none')}>x</button>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/signup'><button>Signup</button></Link>
        </div>
      </div>
      <Switch>
        <Route exact path='/' render={() => <Home handleAdd={handleAdd} addPopup={addPopup} />} />
        <Route path='/results/:category' render={() => <Results handleAdd={handleAdd} addPopup={addPopup} />} />
        <Route path='/show/collections/:id' render={() => <ShowCollection handleAdd={handleAdd} addPopup={addPopup}/>} />
        <Route path='/:category/:id' render={() => <Item handleAdd={handleAdd} addPopup={addPopup}/>} />
        <Route path='/signup' render={() => <SignUp />} />
        <Route path='/login' render={() => <LoginForm />} />
        <Route path='/cart' render={() => <Cart handleDelete={handleDelete}/>} />
      </Switch>
    </CurrentUserProvider>
  );
}

export default App;
