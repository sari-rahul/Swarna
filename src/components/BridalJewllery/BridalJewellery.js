import React from 'react'
import './BridalJewellery.css';
import { bridal_section } from '../../assets/assets';

const BridalJewellery = () => {
  return (
    <div className='bridal-section'>
        <div className='bridal-heading-section'>
            <h4>BRIDAL JEWELLERY</h4> 
            <h2>Your Day Illuminated</h2>
            <p>Let your bridal jewellery reflect the magic of your love.
                From delicate diamond whispers to clssic pearl elegance, 
                each piece is designed to enhance your radiant beauty and 
                become cherished symbol of your journey together.
                From delicate diamond whispers to clssic pearl elegance, 
                each piece is designed to enhance your radiant beauty and 
                become cherished symbol of your journey together.
            </p>
        

        </div>
        <div className='grid-section'>
          <div className='photo-grid'>
              {bridal_section.map((item)=>(
              <div  className='grid-item'
                    key={item.id}
                    style={item.style}>
                      <img src={item.image} alt={item.label}/>
              </div>
          ))}
          </div>
        </div>  
    </div>
  )
}

export default BridalJewellery
