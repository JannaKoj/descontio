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
import HomeScreen from './components/HomeScreen';
import CategoryPage from './components/CategoryPage';
import StorePage from './components/StorePage';

function App() {
  return(
    <Router>
        <div className="App">
            <Switch>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/Categories' exact component={CategoryPage}/>
              <Route path='/Supermarkets' exact component={StorePage} />
            </Switch>

        </div>
    </Router>
  );
}

export default App;
