import React from 'react';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import CartItem from './CartItem';
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";

import './Cart.css'

function Cart() {

    const items = [
        { id: 1, name: '3 in 1 Necklace', description: 'Versatile and elegant, our 3-in-1 necklace effortlessly transitions from day to night with its interchangeable styles, perfect for any occasion.', bonus: '$5.00', price: '$30.00', quantity: 2 , weight: '50gr'},
        { id: 2, name: '3 in 1 Necklace', description: 'Versatile and elegant, our 3-in-1 necklace effortlessly transitions from day to night with its interchangeable styles, perfect for any occasion.', bonus: '$5.00', price: '$30.00', quantity: 2, weight: '50gr' },
        { id: 3, name: '3 in 1 Necklace', description: 'Versatile and elegant, our 3-in-1 necklace effortlessly transitions from day to night with its interchangeable styles, perfect for any occasion.', bonus: '$5.00', price: '$30.00', quantity: 2, weight: '50gr' },
        { id: 4, name: '3 in 1 Necklace', description: 'Versatile and elegant, our 3-in-1 necklace effortlessly transitions from day to night with its interchangeable styles, perfect for any occasion.', bonus: '$5.00', price: '$30.00', quantity: 2, weight: '50gr' },

    ];


  return (
    <div className='Cart'>
        <Nav />

        <div className='cartpage'>

            <div className="shopping-cart">
                <div className="cart-items">
                    {items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="total">
                        <Link to='/Checkout'className='buttonLink'>
                            <p className='button'>Checkout</p>
                        </Link>
                        <span className='span'>Continue shopping →</span>
                        <div>Total <span>$250.00</span></div>
                    </div>
                </div>
                <div className="order-summary">
                    <h3>Ordering</h3>
                    <div className="delivery-options">
                        <h4>Choose Delivery Type</h4>
                        <label><input type="checkbox" name="delivery" /> By Courier</label>
                        <label><input type="checkbox" name="delivery" /> Pickup</label>
                        <label><input type="checkbox" name="delivery" /> Delivery through partners</label>
                    </div>
                    <div className="delivery-time">
                        <h4>Time of Delivery</h4>
                        <label><input type="checkbox" name="time" /> As soon as possible</label>
                        <label><input type="checkbox" name="time" /> Nearest delivery</label>
                        <label><input type="checkbox" name="time" /> On a specific date <input type="number" placeholder="10" /></label>
                    </div>
                    <div className="payment-methods">
                        <h4>Mode of Payment</h4>
                        <label><input type="checkbox" name="payment" /> Card</label>
                        <label><input type="checkbox" name="payment" /> Pay on delivery</label>
                        <label><input type="checkbox" name="payment" /> Bank transfer</label>
                        <label><input type="checkbox" name="payment" /> Voucher</label>
                    </div>
                    
                </div>
            </div>
            <div className="product-list">
                <h3>Other products</h3>
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
        <Footer />
    </div>
  );
}

export default Cart;
