import React from "react";
import "./styles.scss";
import StoreListHeader from "../../components/StoreListHeader";
import SupermarketHeader from "../../components/SupermarketHeader";
import ProductCard from "../../components/ProductCard";
import FilterButton from "../../components/FilterButton";

class StorePage extends React.Component{
  render(){
    return(
      <div className="store-page">
        <SupermarketHeader/>
        <StoreListHeader />
        <FilterButton />
        <ProductCard />
      </div>
    )
  }
}
export default StorePage;
