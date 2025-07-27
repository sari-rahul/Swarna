import React from 'react';
import './ShopByGender.css';

const ShopByGender = () => {
  return (
    <div className='shop-by-gender-section'>
        <div className='shop-by-gender-section-inner-container'>
            <div className='heading-section'>
                <h2>Curated for You</h2>
                <h4>SHOP BY GENDER</h4>
            </div> 
            <div className='gender-tabs-section'>
              <div className='gender-tabs'>
                <div className='gender-tab' id='men'></div>
                <div className='gender-name'>Men's Jewllery</div>
              </div>
              <div className='gender-tabs'>
              <div className='gender-tab' id='women'></div>
              <div className='gender-name'>Women's Jewllery</div>
              </div>
              <div className='gender-tabs'>
                <div className='gender-tab' id='kids'></div>
                <div className='gender-name'>Kids's Jewllery</div>
              </div>
            </div>

        </div> 
    </div>
  )
}

export default ShopByGender