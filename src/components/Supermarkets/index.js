import React from 'react';
import './style.scss';

class Supermarkets extends React.Component {
  render(){
    return(
      <div className='secondwrapper'>
        <div className='wrappertitle'>
          <div className='supermarket_title'>Supermercados</div>
          <div className='seeall_supermarkets'>Ver todos</div>
        </div>
        <div className='supermarketswrapper'>
          <div className='supermarket'>
            <div className='continente'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Continente</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='pingodoce'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Pingo Doce</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='lidl'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Lidl</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='aldi'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Aldi</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='auchan'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Auchan</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='minipreco'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Mini Preço</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='intermache'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Intermaché</div>
              <div className='supermarket_description'>500 descontos</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Supermarkets;
