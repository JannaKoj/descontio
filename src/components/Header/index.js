import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';


class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <div className='header_title'>O que procura?</div>
        <div className="search_wrapper">
          <i class="material-icons search_icon">search</i>
          <input className='search' type='search' placeholder='Pesquisar produtos'/>
        </div>
      </div>
    )
  }
}
export default Header;
