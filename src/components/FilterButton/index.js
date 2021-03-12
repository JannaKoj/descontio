import React from 'react';
import './style.scss';

class FilterButton extends React.Component{
  render(){
    return(
      <div className='filterbuttonwrapper'>
        <button className='filterbutton'>Ordenar</button>
      </div>
    )
  }
}
export default FilterButton;
