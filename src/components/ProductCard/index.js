import React from 'react';
import './style.scss';

class ProductCard extends React.Component {
  render(){
    return(
      <div className='productcardwrapper'>
        <div className='producticon'></div>
        <div className='productdescription'>
            <div className='untildate'></div>
            <div className='productondiscount'></div>
            <div className='units'>
              <div className='productunits'></div>
              <div className='priceperunit'></div>
            </div>
            <div className='productprice'>
              <div className='newproductprice'></div>
              <div className='oldproductprice'></div>
            </div>
        </div>
        <div className='supermarketicon'></div>
        <button className="addbutton">Adicionar</button>
      </div>

    )
  }
}
export default ProductCard;
