import React from 'react';
import './style.scss';


class CategoryHeader extends React.Component{
  render(){
    return(
      <div className='categoryheader'>
          <div className='backarrow'></div>
          <div className='categoryName'>Frutas e Vegetais</div>
      </div>
    )
  }
}
export default CategoryHeader;
