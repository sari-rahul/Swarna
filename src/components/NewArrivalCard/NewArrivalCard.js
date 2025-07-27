import React from 'react'
import './NewArrivalCard.css';

const NewArrivalCard = ({BackgroundImage,Title,width, height}) => {
  return (
    <div className='outer-frame' style={{backgroundImage: `url(${BackgroundImage})`}}>
        <div className='inner-frame'>
            <p>{Title}</p>
        </div>  
    </div>
  )
}

export default NewArrivalCard;
