import React from "react";
import "./styles.scss"
import CategoryHeader from "../../components/CategoryHeader";
import CategoryScrollMenu from "../../components/CategoryScrollMenu";
import FilterButton from "../../components/FilterButton";
import ProductCard from "../../components/ProductCard";

class CategoryPage extends React.Component{
  render(){
    console.log(this.props)
    const categoryId = this.props.match.params.categoryId;
    return(
      <div className="category-page">
        <CategoryHeader categoryId={categoryId} />
        <CategoryScrollMenu />
        <FilterButton />
        <ProductCard categoryId={categoryId} />
      </div>
    )
  }
}
export default CategoryPage;
