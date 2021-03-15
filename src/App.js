import './App.css';
import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Banner from './components/Banner/index';
import Supermarkets from './components/Supermarkets/index';
import TipsandRecepies from './components/TipsandRecepies/index.js';
import Flyers from './components/Flyers/index.js';
import Menu from './components/Menu/index.js';
import CategoryHeader from './components/CategoryHeader/index.js';
import CategoryScrollMenu from './components/CategoryScrollMenu/index.js';
import FilterButton from './components/FilterButton/index.js';
import ProductCard from './components/ProductCard/index.js';
import data from './database.js';

function App() {
  return (
    <div className="App">
      <CategoryHeader />
      <CategoryScrollMenu />
      <FilterButton />
      <ProductCard />
    </div>
  );
}

export default App;
