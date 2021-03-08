import './App.css';
import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Banner from './components/Banner/index';
import Supermarkets from './components/Supermarkets/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <Supermarkets />
    </div>
  );
}

export default App;
