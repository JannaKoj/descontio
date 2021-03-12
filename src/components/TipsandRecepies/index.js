import React from 'react';
import './style.scss';
import data from '../../database.js';

class TipsandRecepies extends React.Component {
  render(){
    return(
      <div className='thirdwrapper'>
        <div className='tips_title'>Dicas e Receitas</div>
        <div className='tipsandrecepieswrapper'>
          {
            data.stories.map(item => {
              return(
                    <div className='tipswrapper'>
                      <img src={item.firstImage} className='image_tip'/>
                    </div>
              )
            })
          }
          </div>
      </div>

    )
  }
}
export default TipsandRecepies;
