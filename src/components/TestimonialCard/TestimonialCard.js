import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({image,name,product,review}) => {
  return (
    <div className='testimonial-outter-card'>
      <div className='testimonial-card'>
          <img src={image} alt='name' className='testimonial-image'/>
          <div className='testimonial-content'>
              <h3 className='testimonial-header'>
                  <span className='name'>{name}</span>
                  <span className='divider'>|</span>
                  <span className='product'>{product}</span>
              </h3>
              <p className='testimonial-review'>{review}</p>
          </div>
      </div>
    </div>
    
  )
}

export default TestimonialCard
