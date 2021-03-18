import React from "react";
import "./style.scss";
import data from "../../database.js";

class Flyers extends React.Component {
  render(){
    return(
      <div className="forthwrapper">
        <div className="wrappertitle">
          <div className="supermarket_title">Folhetos</div>
          <div className="seeall_supermarkets">Ver todos</div>
        </div>
        <div className="supermarketswrapper">

          {data.flyers.map(item => {
            return(
              <div className="supermarket">
              <img src={item.flyerFirstImage} className="folheto"/>
              <div className="label_description">
                <div className="supermarket_name">{item.name}</div>
                <div className="flyer_description">{item.flyersNumber} folheto</div>
              </div>
              </div>
            )
          })

          }
          </div>
      </div>
    )
  }
}
export default Flyers;
