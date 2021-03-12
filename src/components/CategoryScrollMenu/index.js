import React from 'react';
import './style.scss';

class CategoryScrollMenu extends React.Component {
  render(){
    return(
      <div className='categoryscrollmenu'>
        <div className='categorylist'>
          <button className='categorylistname'>Frutas e Vegetais</button>
          <button className='categorylistname'>Carne</button>
          <button className='categorylistname'>Peixe</button>
          <button className='categorylistname'>Laticínios</button>
          <button className='categorylistname'>Mercearia</button>
          <button className='categorylistname'>Bebidas</button>
          <button className='categorylistname'>Padaria</button>
          <button className='categorylistname'>Alcool</button>
          <button className='categorylistname'>Animais</button>
          <button className='categorylistname'>Chá e Cafe</button>
          <button className='categorylistname'>Charcutaria</button>
          <button className='categorylistname'>Congelados</button>
          <button className='categorylistname'>Higiene e Beleza</button>
          <button className='categorylistname'>Para o bebé</button>
          <button className='categorylistname'>Para o lar</button>
          <button className='categorylistname'>Pronto a comer</button>
        </div>
      </div>
    )
  }
}
export default CategoryScrollMenu;
