import React from "react";
import "./styles.scss";
import StoreListHeader from "../../components/StoreListHeader";
import SupermarketHeader from "../../components/SupermarketHeader";
import ProductCard from "../../components/ProductCard";
import FilterButton from "../../components/FilterButton";

class StorePage extends React.Component{
  render(){
    console.log(this.props);
    const storeId = this.props.match.params.storeId;
    return(
      <div className="store-page">
        <SupermarketHeader storeId={storeId}/>
        <StoreListHeader storeId={storeId}/>
        <FilterButton />
        <ProductCard storeId={storeId}/>
      </div>
    )
  }
}
export default StorePage;
