import React from 'react';
import './Banner.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div className='banner-section'>
        <div className='bannersection-innercontainer'>
            <div className='image-section'>
            </div>
            <div className='tagline-section'>
                <div className='tagline'>
                    <h4>TIMELESS BEAUTY</h4>
                    <h1>ELEGANCE IN EVERY
                    CHAIN,BEAUTY
                    UNCHAINED
                    </h1>
                </div> 
                <div className='small-paragraph'>
                    <h6>Like a masterpiece of natire's artistry,each
                    gem holds a unique light, reflecting the
                    inherent brillianceof the one who wears it.
                    </h6>
                </div>     
                <div className='primary-cta'>
                    <PrimaryButton/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Banner
