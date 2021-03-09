import React from 'react';
import './style.scss';

class Categories extends React.Component {
  render(){
    return(
      <div className="categories_wrapper">
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle frutas'></div>
          </div>
          <div className='categories_description'>Frutas e Vegetais</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle meat'></div>
          </div>
          <div className='categories_description'>Carne</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle fish'></div>
          </div>
          <div className='categories_description'>Peixe</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle diary'></div>
          </div>
          <div className='categories_description'>Laticínios</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle grocery'></div>
          </div>
          <div className='categories_description'>Mercearia</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle frozen'></div>
            <div className='icon_image'></div>
          </div>
          <div className='categories_description'>Congelados</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle homecat'></div>
          </div>
          <div className='categories_description'>Para o Lar</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle babycat'></div>
          </div>
          <div className='categories_description'>Para o bebé</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle alcohol'></div>
          </div>
          <div className='categories_description'>Álcool</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle animals'></div>
          </div>
          <div className='categories_description'>Animais</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle teaandcoffee'></div>
          </div>
          <div className='categories_description'>Chá e Café</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle beauty'></div>
          </div>
          <div className='categories_description'>Higiene e Beleza</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle charcuterie'></div>
          </div>
          <div className='categories_description'>Charcutaria</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle bread'></div>
          </div>
          <div className='categories_description'>Padaria</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle takeaway'></div>
          </div>
          <div className='categories_description'>Pronto a comer</div>
        </div>
        <div className='categories'>
          <div className='categories_image'>
            <div className='circle drinks'></div>
          </div>
          <div className='categories_description'>Bebidas</div>
        </div>
      </div>
    )
  }
}
export default Categories;
