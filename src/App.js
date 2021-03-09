import './App.css';
import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Banner from './components/Banner/index';
import Supermarkets from './components/Supermarkets/index';
import TipsandRecepies from './components/TipsandRecepies/index.js';
import Flyers from './components/Flyers/index.js';
import Menu from './components/Menu/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <Supermarkets />
      <TipsandRecepies />
      <Flyers />
      <Menu />
    </div>
  );
}

export default App;
