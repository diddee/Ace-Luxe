import React from 'react';
import './Review.css';
import Customer from '../../Assets/Customer.png'; 

const CustomerReview = () => {
    return (
        <section className="customer-review">
            <div className="customer-review__content">
                <div className="customer-review__image-wrapper">
                    <img src={Customer} alt="Customer" className="customer-review__image" />
                </div>
                <div className="customer-review__text">
                    <h2>Customers Review</h2>
                    <p>I am absolutely thrilled with my purchase! The craftsmanship is exceptional, and the piece looks even more stunning in person. The entire ordering process was seamless, and my jewelry arrived quickly and beautifully packaged. I couldn't be happier and will definitely be a returning customer!</p>
                    <p className="customer-name">Stephen G.</p>
                    <div className="arrow">→</div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;

