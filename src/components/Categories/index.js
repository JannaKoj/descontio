import React from "react";
import "./style.scss";
import data from "../../database.js";
import {Link} from "react-router-dom";

class Categories extends React.Component {
  render(){
    return(
      <div className="categories_wrapper">
        {
          data.categories.map(item => {
            return(
              <Link to={"/categories/"+item.id} className="categories" key={item.id}>
                <div className="categories_image">
                  <div className="circle iconcategory" style={{backgroundImage: "url("+ item.icon +")"}}></div>
                </div>
                <div className="categories_description">{item.name}</div>
              </Link>
            )
      })
    }
      </div>
    )
  }
}
export default Categories;
