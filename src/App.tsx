import './App.scss';


import Navbar from './components/Navbar';
import HeroCollection from './components/HeroCollection';
import FeaturedItems from './components/FeaturedItems';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main style={{flex: 1}}>
        <HeroCollection />
        <FeaturedItems />

      </main>
    </div>
  );
}

export default App;
