import React from 'react';

import Logo from '../../Assets/Logo.png'
import X from '../../Assets/twitter.png'
import Tiktok from '../../Assets/tiktok.png'
import Instagram from '../../Assets/instagram.png'
import Facebook from '../../Assets/facebook.png'


import './Footer.css';

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-logo">
            <img src={Logo} alt="ACE LUXE" />
        </div>
        <div className='"footer-content"'>
            <div className="footer-main">
                <div className="footer-section">
                  <h3>INFORMATION</h3>
                  <p>About Us</p>
                  <p>Products</p>
                  <p>Categories</p>
                  <p>Delivery</p>
                </div>
                <div className="footer-section" id='address'> 
                  <h3>ADDRESS</h3>
                  <p>Elegance Jewelry Boutique 123 Sparkle Avenue, Suite 456 Glamour City, Jewel State 78901 United States</p>
                </div>
                <div className="footer-section">
                  <h3>MORE</h3>
                  <p>Blog</p>
                  <p>Media</p>
                  <p>Help centre</p>
                </div>
                <div className="footer-section">
                  <h3>SOCIAL MEDIA</h3>
                  
                    <div>
                      <img src={Facebook} alt="facebook" />
                      <p>Facebook</p>
                    </div>

                    <div>
                      <img src={Instagram} alt="Instagram" />
                      <p>Instagram</p>
                    </div>

                    <div>
                      <img src={X} alt="X" />

                      <p>X</p>
                    </div>

                    <div>
                      <img src={Tiktok} alt="Tiktok" />
                      <p>Tiktok</p>
                    </div>
    
                </div>
            </div>
            <div className="footer-bottom">
              <p>All rights reserved 2024 ©</p>
            </div>
        </div>
      </div>
  );
};

export default Footer;
