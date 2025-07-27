import React from 'react';
import './NewArrivals.css';
import NewArrivalCard from '../NewArrivalCard/NewArrivalCard';
import { new_arrivals } from '../../assets/assets';

const NewArrivals = () => {
  return (
    <div className='new-arrivals'>
        <div className='top-section'>
            <div className='top-section-inner-section'>
                <h2>New Arrivals</h2>
                <p>Be the first to experince the newest addition to our handcrafted collections.
                Discover fresh designs and captivating pieces,each a testament elegance and exquisite artistry.
                Be the first to experince the newest addition to our handcrafted collections.
                Discover fresh designs and captivating pieces,each a testament elegance and exquisite artistry</p>
            </div>
        </div>
        <div className='bottom-section'>
          {new_arrivals.map((item)=>(
            <NewArrivalCard key={item.id}
            BackgroundImage={item.background_image}
            Title={item.title}
            />
          ))}
            
        </div>  
    </div>
  )
}

export default NewArrivals
