import React from "react";
import "./style.scss";
import data from "../../database.js";
import {Link} from "react-router-dom";

class Categories extends React.Component {
  render(){
    return(
      <div className="categories_wrapper">
        {
          data.categories.map(category => {
            return(
              <Link to={"/categories/"+category.id} className="categories" key={category.id}>
                <div className="categories_image">
                  <div className="circle iconcategory" style={{backgroundImage: "url("+ category.icon +")"}}></div>
                </div>
                <div className="categories_description">{category.name}</div>
              </Link>
            )
      })
    }
      </div>
    )
  }
}
export default Categories;
