import React from 'react';
import './VerticalScroll.css';

const VerticalScroll = ({images = []}) => {   
  return (
    <div className='scroll-grid-wrapper'>
      <div className='scroll-grid'>
        {[...images, ...images].map((item, index)=>(
            <div className='scroll-item' key={index}>
                <img src={item.image} alt={`scroll-img-${index}`}/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScroll;
