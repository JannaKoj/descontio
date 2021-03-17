import React from 'react';
import './styles.scss'
import CategoryHeader from '../CategoryHeader';
import CategoryScrollMenu from '../CategoryScrollMenu';
import FilterButton from '../FilterButton';
import ProductCard from '../ProductCard';

class CategoryPage extends React.Component{
  render(){
    return(
      <div className='category-page'>
        <CategoryHeader />
        <CategoryScrollMenu />
        <FilterButton />
        <ProductCard />
      </div>
    )
  }
}
export default CategoryPage;
