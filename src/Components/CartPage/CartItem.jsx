// src/components/CartItem.js
import React from 'react';
import Picture from '../../Assets/Product1.png'
import CartRing from '../../Assets/CartRig.png'

import './CartItem.css';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <img src={Picture} alt={item.name} className='img'/>
            <img src={CartRing} alt={item.name} className='CartRing'/>
            <div className="item-details">
                <h4>{item.name} 
                    <div className="star-rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </h4>
                <p>{item.description}</p>
            </div>
            <div className='cartRight'>
                    
                    <div className="item-bonus">
                        <p>{item.bonus} <span className="sale">Sale</span></p>
                        <div ><span className='weight'>{item.weight}</span> <span className="discount">-10%</span></div>
                    </div>
                    <div className="item-quantity">
                        <p> - <span>2</span> + </p>
                    </div>
                    <div className="item-price">
                        <p>{item.price}</p>
                    </div>
                    
                    <button className="remove-item">X</button>
                </div>
            <div className="item-Rdetails">
                <h3>{item.name} 
                    <div className="star-ratings">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </h3>
                <div className='CartRight'>
                    <div className="item-price">
                        <p>{item.price}</p>
                    </div>
                    <div className="item-bonus">
                        <p>{item.bonus} <span className="sale">Sale</span></p>
                        <div ><span className='weight'>{item.weight}</span> <span className="discount">-10%</span></div>
                    </div>
                    <div className="item-quantity">
                        <p> - <span>2</span> + </p>
                    </div>
                    
                    <button className="remove-item">X</button>
                </div>
                <div className='desc'>
                    <p className='header'>Product Description</p>
                    {item.description}
                </div>
            </div>
            
            
        </div>
    );
};

export default CartItem;
