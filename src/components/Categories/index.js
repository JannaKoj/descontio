import React from 'react';
import './style.scss';
import data from '../../database.js';

class Categories extends React.Component {
  render(){
    return(
      <div className="categories_wrapper">
        {
          data.categories.map(item => {
            return(
              <div className='categories'>
                <div className='categories_image'>
                  <div className='circle iconcategory' style={{backgroundImage: 'url('+ item.icon +')'}}></div>
                </div>
                <div className='categories_description'>{item.name}</div>
              </div>
            )
      })
    }
      </div>
    )
  }
}
export default Categories;
