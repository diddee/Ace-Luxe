// src/components/CartItem.js
import React from 'react';
import Picture from '../../Assets/Product1.png'
import './CartItem.css';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <img src={Picture} alt={item.name} />
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
            <div className="item-bonus">
                <p>{item.bonus} <span className="sale">Sale</span></p>
                <div ><span className='weight'>{item.weight}</span> <span className="discount">-10%</span></div>
            </div>
            <div className="item-quantity">
                <input type="number" value={item.quantity} min="1" />
            </div>
            <div className="item-price">
                <span>{item.price}</span>
            </div>
            <button className="remove-item">X</button>
        </div>
    );
};

export default CartItem;
