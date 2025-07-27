import React from 'react'
import './GenZ.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import VerticalScroll from '../VerticalScroll/VerticalScroll'
import { genZ_grid1, genZ_grid2 } from '../../assets/assets';


const GenZ = () => {
  return (
    <div className='genZ-section'>
        <div className='heading-section'>
            <div className='heading-inner-section'>
                <h2>
                Explore Gen Z Jewellery from <span>SWARNA</span>
            </h2>
            </div>
            <div className='golden-border'>
                <PrimaryButton/>
            </div>
        </div>
        <div className='scroll'>
          <VerticalScroll images={genZ_grid1} />
          <VerticalScroll images={genZ_grid2} />
        </div>
        <div className='main-image'></div> 
    </div>
  )
}

export default GenZ
