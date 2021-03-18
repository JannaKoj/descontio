import './App.css';
import Header from './components/Header/index';
import Categories from './components/Categories/index';
import Banner from './components/Banner/index';
import Supermarkets from './components/Supermarkets/index';
import TipsandRecepies from './components/TipsandRecepies/index.js';
import Flyers from './components/Flyers/index.js';
import Menu from './components/Menu/index.js';
import data from './database.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './router/HomeScreen';
import CategoryPage from './router/CategoryPage';
import StorePage from './router/StorePage';
import SearchPage from './router/SearchPage';

function App() {
  return(
    <Router>
        <div className="App">
            <Switch>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/categories/:categoryId' exact component={CategoryPage}/>
              <Route path='/supermarkets/:storeId' exact component={StorePage} />
              <Route path='/search' exact component={SearchPage} />
            </Switch>

        </div>
    </Router>
  );
}

export default App;
