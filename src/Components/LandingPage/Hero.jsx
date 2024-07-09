import React from 'react';
import Hero1 from '../../Assets/Hero1.png'
import Hero2 from '../../Assets/Hero2.png'

import './Hero.css';

const LandingPage = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Discover Timeless Elegance and Craftsmanship in Every Piece</h1>
                <p>Embrace your unique style with our exquisite jewelry, designed to illuminate your beauty and capture the essence of sophistication.</p>
                <button className="discover-button">Discover More</button>
                <div className="stats">
                    <div className="stat-item">
                        <div className='ratings'>15</div>
                        <div className='desc'>Countries</div>
                    </div>
                    <div className="stat-item">
                        <div className='ratings'>1.7K</div>
                        <div className='desc'>Reviews</div>
                    </div>
                    <div className="stat-item">
                        <div className='ratings'>5K+</div>
                        <div className='desc'>Customers</div>
                    </div>
                </div>
            </div>
            <div className="hero-images">
                <div className="image-model">
                    <img src={Hero1} alt="Model" />
                </div>
                <div className="image-jewelry">
                    <img src={Hero2} alt="Jewelry" />
                </div>
            </div>
        </section>
    );
};

export default LandingPage;