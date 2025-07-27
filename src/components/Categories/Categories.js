import React from 'react'
import './Categories.css';
import { shop_categories } from '../../assets/assets';

const Categories = ({category,setCategory}) => {
  return (
    <div className='our-categories-section'>
        <div>
            <h4>OUR CATEGORIES</h4>
            <h2>Shop By Categories</h2>
        </div>
        <div className='categories-list-wrapper'>
            <div className="categories-list">
                {shop_categories.map((item,index)=>{
            return (
                <div key={index} className="categories-list-item">
                    <img className={category===item.category_name?'active':''} src={item.category_image} alt="" />
                    <p>{item.category_name}</p>
                </div>              
            )
        })}
        </div>  
        </div>
        
    </div>
  )
}

export default Categories
