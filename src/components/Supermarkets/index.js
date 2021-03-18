import React from "react";
import "./style.scss";
import data from "../../database.js";
import {Link} from "react-router-dom";

class Supermarkets extends React.Component {
  render(){
    return(
      <div className="secondwrapper">
        <div className="wrappertitle">
          <div className="supermarket_title">Supermercados</div>
          <div className="seeall_supermarkets">Ver todos</div>
        </div>
        <div className="supermarketswrapper">
        {
          data.stores.map(store => {
            return(
              <Link to={"/supermarkets/"+store.id} className="supermarket" key={store.id}>
                <img src={store.icon} className="supermarketicon"/>
                <div className="label_description">
                  <div className="supermarket_name">{store.name}</div>
                  <div className="supermarket_description">{store.discountsNumber} descontos</div>
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default Supermarkets;
