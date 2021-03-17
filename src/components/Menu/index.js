import React from 'react';
import './style.scss';

class Menu extends React.Component {
  render(){
    return(
        <div className='menu'>
            <div className='home_menu'>
              <div className='home_menu_icon'></div>
              <div className='menu_description'>Início</div>
            </div>
            <div className='search_menu'>
              <div className='search_menu_icon'></div>
              <div className='menu_description'>Pesquisar</div>
            </div>
            <div className='list_menu'>
              <div className='list_menu_icon'></div>
              <div className='menu_description'>Lista</div>
            </div>
        </div>
    )
  }
}
export default Menu;
