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
          data.stores.map(item => {
            return(
              <Link to="/supermarkets" className="supermarket">
                <img src={item.icon} className="supermarketicon"/>
                <div className="label_description">
                  <div className="supermarket_name">{item.name}</div>
                  <div className="supermarket_description">{item.discountsNumber} descontos</div>
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
