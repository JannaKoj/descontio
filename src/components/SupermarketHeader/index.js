import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import data from '../../database.js';

class SupermarketHeader extends React.Component{
  render(){
    const storeInfo = data.stores.find(store =>{
      return store.id === this.props.storeId;
    })
    return(
      <div className="supermarketheader">
        <div className="marketheader" id={storeInfo.id} >
            <Link to="/" className="backarrow"></Link>
            <img src={storeInfo.icon} className="storeicon"/>

        </div>
      </div>
    )
  }
}
export default SupermarketHeader;
