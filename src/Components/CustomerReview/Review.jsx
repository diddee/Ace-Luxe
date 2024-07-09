import React from 'react';
import Customer from '../../Assets/Customer.png'; 
import './Review.css';


const CustomerReview = () => {
    return (
        <section className="customer-review">
            <h2>Customers Review</h2>
            <div className="customer-review__content">
                <div className="customer-review__image-wrapper"></div>
                <img src={Customer} alt="Customer" className="customer-review__image" />
                
                <div className="customer-review__text">
                    <p>I am absolutely thrilled with my purchase! The craftsmanship is exceptional, and the piece looks even more stunning in person. The entire ordering process was seamless, and my jewelry arrived quickly and beautifully packaged. I couldn't be happier and will definitely be a returning customer!</p>
                    <div className="arrow">→</div>
                    <p className="customer-name">Stephen G.</p>
                    
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;

