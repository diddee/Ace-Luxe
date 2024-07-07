import React from 'react';
import OrderImage from '../../Assets/Order.png'

import './Order.css';

const Order = () => {
  return (
    <div className="order-page">
      <div className="order-content">
        <h2 className="order-title">HOW TO ORDER</h2>
        <ul className="order-steps">
          <li>Explore our exquisite range of jewelry pieces</li>
          <li>Click on the desired item to view details</li>
          <li>Click 'Add to Cart' to place the item in your shopping cart</li>
          <li>Click 'Checkout' to start the payment process</li>
          <li>Provide your shipping address and contact details</li>
          <li>Choose your payment method and enter the required details</li>
          <li>Double-check all order details, including shipping and payment information</li>
          <li>Click 'Place Order' to complete your purchase</li>
          <li>You will receive an order confirmation email with tracking information</li>
        </ul>
        <button className="order-button">ORDER NOW</button>
      </div>
      <div className="order-image">
        <img src={OrderImage} alt="Order Now" />
      </div>
    </div>
  );
};

export default Order;