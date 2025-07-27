import React from 'react';
import './PromoOffers.css';
import CountDownTimer from '../CountDownTimer/CountDownTimer';

const PromoOffers = () => {
  return (
    <div className='promo-offer-section'>
        <div className='timer-section'>
          <div className='special-offer-section'>
            <h2>Special Offer</h2>
            <h4>Ending Soon</h4>
          </div>
          <CountDownTimer targetDate="2025-08-31T23:59:59"/>
        </div>
        <div className='poster-section'>
         <div id='poster'></div>   
        </div>
      
    </div>
  )
}

export default PromoOffers
