import React from 'react';
import './style.scss';

class Flyers extends React.Component {
  render(){
    return(
      <div className='forthwrapper'>
        <div className='wrappertitle'>
          <div className='supermarket_title'>Folhetos</div>
          <div className='seeall_supermarkets'>Ver todos</div>
        </div>
        <div className='supermarketswrapper'>
          <div className='supermarket'>
            <div className='folhetocontinente'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Continente</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetopingodoce'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Pingo Doce</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetolidl'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Lidl</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetoaldi'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Aldi</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetoauchan'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Auchan</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetominipreco'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Mini Preço</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
          <div className='supermarket'>
            <div className='folhetointermache'></div>
            <div className='label_description'>
              <div className='supermarket_name'>Intermaché</div>
              <div className='flyer_description'>1 folheto</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Flyers;
