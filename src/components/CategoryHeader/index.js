import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import data from "../../database.js";


class CategoryHeader extends React.Component{
  render(){
    const categoryInfo = data.categories.find(item =>{
      return item.id === this.props.categoryId
    })
    return(
      <div className="categoryheader">
          <Link to="/" className="backarrow"></Link>
          <div className="categoryName">{categoryInfo.name}</div>
      </div>
    )
  }
}
export default CategoryHeader;
