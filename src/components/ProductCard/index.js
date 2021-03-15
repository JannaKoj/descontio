import React from 'react';
import './style.scss';
import data from '../../database.js';

class ProductCard extends React.Component {
  render(){
    return(
      <div className='mainwrapper'>
      {
          data.products.map(item => {
          return(
            <div className='productcardwrapper'>
              <img src={item.icon} className='producticon'/>
              <div className='productdescription'>
                  <div className='untildate'>até {item.untilDate}</div>
                  <div className='productondiscount'>{item.name}</div>
                  <div className='units'>
                    <div className='productunits'>1 kg</div>
                    <span className='dot'>·</span>
                    <div className='priceperunit'>0.89/kg</div>
                  </div>
                  <div className='productprice'>
                    <div className='newproductprice'>0.89€</div>
                    <div className='oldproductprice'>1.05€</div>
                  </div>
              </div>
              <div className='supermarketroundicon'></div>
              <button className="addbutton">Adicionar<img src='./addgreen.png' className='plusbutton'/></button>
            </div>
          )
      })
    }
    </div>
  )}
}

export default ProductCard;
