import React from 'react';
import './styles.scss';
import StoreListHeader from '../StoreListHeader';
import SupermarketHeader from '../SupermarketHeader';
import ProductCard from '../ProductCard';
import FilterButton from '../FilterButton';

class StorePage extends React.Component{
  render(){
    return(
      <div className='store-page'>
        <SupermarketHeader/>
        <StoreListHeader />
        <FilterButton />
        <ProductCard />
      </div>
    )
  }
}
export default StorePage;
