import React from 'react';
import './style.scss';
import CategoryScrollMenu from '../CategoryScrollMenu/index.js';

class StoreListHeader extends React.Component{
  render(){
    return(
      <div className='storewrapper'>
        <div className='storetitle'>Continente</div>
        <div className='discounts'>X descontos</div>
        <div className='newdiscounts'>Novos descontos todas as X feiras</div>
        <div className='storeicon'></div>
        <CategoryScrollMenu />
      </div>
    )
  }
}
export default StoreListHeader;
