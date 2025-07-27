import React, { useState } from 'react'
import './CustomerReviews.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { customer_reviews } from '../../assets/assets';

const CustomerReviews = () => {

    const[currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 2;
    const totalCards = customer_reviews.length;

    const handlePrev = ()=>{
        setCurrentIndex((prev)=>Math.max(prev-1, 0));
    };

    const handleNext = ()=>{
        setCurrentIndex((prev)=> Math.min(prev + 1, totalCards -visibleCards));
    };

    const translateX = -(currentIndex * (100/visibleCards));
  return (
    <div className='customer-reviews-section'>
            <div className='review-heading-section'>
                <h2>What Our Customers Say </h2>
                <div className='icon-section'>
                    <div className={`arrow-outer-circle ${currentIndex === 0 ? 'disabled' : ''}`} 
                                onClick={handlePrev}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className= {`arrow-outer-circle ${currentIndex === totalCards - visibleCards ? 'disabled' : ''}`} 
                            onClick={handleNext}>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className='review-main-section-wrapper' >                    
                <div className='review-main-section'  
                    style={{transform :`translateX(${translateX}%)`}}>
                    {customer_reviews.map((item,index) => (
                        <TestimonialCard 
                        key={index}
                        image={item.image}
                        name={item.name}
                        product={item.product}
                        review={item.review}/>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default CustomerReviews
