import React from 'react';
import './style.scss';
import Header from '../Header';
import Categories from '../Categories';
import Banner from '../Banner';
import Supermarkets from '../Supermarkets';
import TipsandRecepies from '../TipsandRecepies';
import Flyers from '../Flyers';
import Menu from '../Menu';

class HomeScreen extends React.Component{
  render(){
    return(
      <div className='homewrapper'>
        <Header/>
        <Categories />
        <Banner />
        <Supermarkets/>
        <TipsandRecepies />
        <Flyers />
        <Menu />
      </div>
    )
  }
}
export default HomeScreen;
