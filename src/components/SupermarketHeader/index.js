import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";

class SupermarketHeader extends React.Component{
  render(){
    return(
      <div className="supermarketheader">
        <div className="marketheader">
            <Link to="/" className="backarrow"></Link>
        </div>
      </div>
    )
  }
}
export default SupermarketHeader;
