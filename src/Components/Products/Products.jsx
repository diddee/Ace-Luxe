import React from 'react';
import Original from '../../Assets/Original.png'
import FastPayment from '../../Assets/FastPayment.png'
import Shipping from '../../Assets/Shipping.png'
import Affordable from '../../Assets/Affordable.png'
import Product1 from '../../Assets/Product1.png'
import Product2 from '../../Assets/Product2.png'
import Product3 from '../../Assets/Product3.png'
import Product4 from '../../Assets/Product4.png'
import Product5 from '../../Assets/Product5.png'
import Product6 from '../../Assets/Product6.png'
import Product7 from '../../Assets/Product7.png'
import Product8 from '../../Assets/Product8.png'
import Like from '../../Assets/like.png'



import './Products.css';

const products = [
  { id: 1, type: 'Neckpiece', price: 45, image: Product1 },
  { id: 2, type: 'Neckpiece', price: 45, image: Product2 },
  { id: 3, type: 'Neckpiece', price: 45, image: Product3 },
  { id: 4, type: 'Neckpiece', price: 45, image: Product4 },
  { id: 5, type: 'Neckpiece', price: 45, image: Product5 },
  { id: 6, type: 'Neckpiece', price: 45, image: Product6 },
  { id: 7, type: 'Neckpiece', price: 45, image: Product7 },
  { id: 8, type: 'Neckpiece', price: 45, image: Product8 }
];

const Products = () => {
  return (
    <div className="product-page">
      <div className="features">
        <div className="feature">
          <img src={Original} alt="Original" />
          <h3>Original</h3>
          <p>Meticulous craftsmanship, true authentic beauty.</p>
        </div>
        <div className="feature">
          <img src={Shipping} alt="Shipping" />
          <h3>Shipping</h3>
          <p>Enjoy fast, reliable worldwide shipping.</p>
        </div>
        <div className="feature">
          <img src={FastPayment} alt="Fast Payment" />
          <h3>Fast Payment</h3>
          <p>Experience secure and swift payments.</p>
        </div>
        <div className="feature" id='feature4'> 
          <img src={Affordable} alt="Affordable" />
          <h3>Affordable</h3>
          <p>Luxury jewelry at affordable prices.</p>
        </div>
      </div>
      <h2 className="title">Our Products</h2>
      <div className="filters">
        <button className="filter active">All</button>
        <button className="filter">Necklace</button>
        <button className="filter">Earrings</button>
        <button className="filter">Wristwatches</button>
        <button className="filter">Leg chains</button>
        <button className="filter">Bangles</button>
        <button className="filter">Nose rings</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product" >
            <img src={product.image} alt={product.type} className="product-image" />
            <span><img src={Like}  className='favorite-icon'/></span>
            <div className="product-info">
              <p>{product.type}</p>
              <p className='price'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;