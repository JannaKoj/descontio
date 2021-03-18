import React from "react";
import "./style.scss";
import CategoryScrollMenu from "../CategoryScrollMenu/index.js";
import data from '../../database.js';

class StoreListHeader extends React.Component{
  render(){
    const storeInfo = data.stores.find(store =>{
      return store.id === this.props.storeId
    })
    return(
      <div className="storewrapper">
        <div className="storetitle">{storeInfo.name}</div>
        <div className="discounts">{storeInfo.discountsNumber} descontos</div>
        <div className="newdiscounts">Novos descontos todas as {storeInfo.discountsUpdate} feiras</div>
        <CategoryScrollMenu />
      </div>
    )
  }
}
export default StoreListHeader;
