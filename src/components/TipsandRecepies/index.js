import React from 'react';
import './style.scss';

class TipsandRecepies extends React.Component {
  render(){
    return(
      <div className='tipsandrecepieswrapper'>
        <div className='tips_title'>Dicas e Receitas</div>
        <div className='tipswrapper'>
          <div className='first_tip'></div>
          <div className='second_tip'></div>
          <div className='third_tip'></div>
          <div className='forth_tip'></div>
          <div className='fifth_tip'></div>
        </div>
      </div>
    )
  }
}
export default TipsandRecepies;
