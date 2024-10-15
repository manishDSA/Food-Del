import React, { useContext } from 'react';
import './FoodItem.css'
import { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {
    const[itemCount,setitemCount]= useState(0)
    const {cartItems,addToCart,removefromCart,url}=useContext(StoreContext)
  return (
    <div className='food-item'>
       <div className="food-item-img-cotainer">
        <img src={url+"/images/"+image} alt="" className="food-item-image" />
        {!cartItems[id]
      ?<img className='add' onClick={()=>addToCart(id)} src="/img/add_icon_white.png" alt="" />
      :<div className='food-item-counter'>
        <img onClick={()=>removefromCart(id)} src="/img/remove_icon_red.png" alt="" />
        <p>{cartItems[id]}</p>
        <img onClick={()=>addToCart(id)} src="/img/add_icon_green.png" alt="" />
      </div>

      }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src="/img/rating_starts.png" alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>

            </div> 
      
    </div>
  );
}

export default FoodItem;
