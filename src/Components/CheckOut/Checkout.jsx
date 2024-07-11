import React from 'react';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import ProductImage from '../../Assets/Product1.png'; // Make sure to save your product image in the src folder


import './Checkout.css';

function CheckOut() {
  return (
    <div className='checkout-page' >
        <Nav />
        <div className='checkout-content'>
            <h2>CHECK OUT</h2>
            <div className='container'>
                <div className="container1">
                  <form>
                    <section>
                      <h4>Personal Information</h4>
                      <div className='input'>
                          <div className="input-group">
                            <label>First name*</label>
                            <input type="text" placeholder="Janet" />
                          </div>
                          <div className="input-group">
                            <label>Last name*</label>
                            <input type="text" placeholder="Jackson" />
                          </div>
                          <div className="input-group">
                            <label>Phone number*</label>
                            <input type="text" placeholder="+380 xxx xxx xxx" />
                          </div>
                          <div className="input-group">
                            <label>Email*</label>
                            <input type="email" placeholder="example@gmail.com" />
                          </div>
                      </div>
                    </section>
                    <section>
                      <h4>Shipping Information</h4>
                      <div className='input'>
                          <div className="input-group">
                            <label>Country*</label>
                            <input type="text" placeholder="United States" />
                          </div>
                          <div className="input-group">
                            <label>State*</label>
                            <input type="text" placeholder="At" />
                          </div>
                          <div className="input-group">
                            <label>City*</label>
                            <input type="text" placeholder="city name" />
                          </div>
                          <div className="input-group">
                            <label>Zip code*</label>
                            <input type="text" placeholder="22039" />
                          </div>
                      </div>
                    </section>
                    <section>
                      <h4>Payment Information</h4>
                      <div className="input-group">
                        <label>Card number*</label>
                        <input type="text" placeholder="1234 1234 1234 1234" />
                      </div>
                      <div className='input'>
                          <div className="input-group">
                            <label>Expiry date*</label>
                            <input type="text" placeholder="MM / YY" />
                          </div>
                          <div className="input-group">
                            <label>CVV*</label>
                            <input type="text" placeholder="CVV" />
                          </div>
                      </div>
                    </section>
                    <div className='button'><button type="submit">Done</button></div>
                  </form>
                </div>
                <div className="container2">
                    <h4>Order Summary</h4>
                    <div>
                        <div className="order-item">
                            <img src={ProductImage} alt="3 in 1 Necklace" />
                            <div className="details">
                                <h4>3 in 1 Necklace
                                    <div className="star-rating">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                    </div>
                                </h4>
                                <div className='price'>
                                  <div> <span >$5.00 </span><span className='gram'>50gr </span></div>
                                  <div className="sale"> <span >Sale</span><span className="discount">-10%</span></div>
                                </div>
                            </div>
                            <div className="quantity">
                              <p> - <span>2</span> + </p>
                            </div>
                            <div className="prices">$30.00</div>
                            <button className="remove">X</button>
                        </div>
                        <div className="order-item">
                            <img src={ProductImage} alt="3 in 1 Necklace" />
                            <div className="details">
                                <h4>3 in 1 Necklace 
                                    <div className="star-rating">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                    </div>
                                </h4>
                                <div className='price'>
                                  <div> <span >$5.00 </span><span className='gram'>50gr </span></div>
                                  <div className="sale"> <span >Sale</span><span className="discount">-10%</span></div>
                                </div>
                            </div>
                            <div className="quantity">
                              <p> - <span>2</span> + </p>
                            </div>
                            <div className="prices">$30.00</div>
                            <button className="remove">X</button>
                        </div>
                        <div className="order-item">
                            <img src={ProductImage} alt="3 in 1 Necklace" />
                            <div className="details">
                                <h4>3 in 1 Necklace
                                    <div className="star-rating">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                    </div>
                                </h4>
                                <div className='price'>
                                  <div> <span >$5.00 </span><span className='gram'>50gr </span></div>
                                  <div className="sale"> <span >Sale</span><span className="discount">-10%</span></div>
                                </div>
                            </div>
                            <div className="quantity">
                              <p> - <span>2</span> + </p>
                            </div>
                            <div className="prices">$30.00</div>
                            <button className="remove">X</button>
                        </div>
                        <div className="order-item">
                            <img src={ProductImage} alt="3 in 1 Necklace" />
                            <div className="details">
                                <h4>3 in 1 Necklace
                                    <div className="star-rating">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                    </div>
                                </h4>
                                <div className='price'>
                                  <div> <span >$5.00 </span><span className='gram'>50gr </span></div>
                                  <div className="sale"> <span >Sale</span><span className="discount">-10%</span></div>
                                </div>
                            </div>
                            <div className="quantity">
                              <p> - <span>2</span> + </p>
                            </div>
                            <div className="prices">$30.00</div>
                            <button className="remove">X</button>
                        </div>
                        {/* Repeat the above block for other order items */}
                    </div>
                    <div className="totals">
                        <div className='sum'>
                            <div>
                                Sub-total <p>$90.00</p>
                            </div>
                            <div>
                                Shipping <p>$45.50</p>
                            </div>
                        </div>
                        <div className='total'>
                           <span>TOTAL</span> <p>$135.50</p>
                        </div>
                    </div>
                    <div className='button'><button className="place-order">Place Order</button></div>
                    <p className="terms">
                        By placing an order, you agree to the company's
                        <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default CheckOut;
