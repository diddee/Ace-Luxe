import React from 'react';
import './Products.css';

const products = [
  { id: 1, type: 'Neckpiece', price: 45, image: 'image1.jpg' },
  { id: 2, type: 'Neckpiece', price: 45, image: 'image2.jpg' },
  { id: 3, type: 'Neckpiece', price: 45, image: 'image3.jpg' },
  { id: 4, type: 'Neckpiece', price: 45, image: 'image4.jpg' },
  { id: 5, type: 'Neckpiece', price: 45, image: 'image5.jpg' },
  { id: 6, type: 'Neckpiece', price: 45, image: 'image6.jpg' },
  { id: 7, type: 'Neckpiece', price: 45, image: 'image7.jpg' },
];

const Products = () => {
  return (
    <div className="product-page">
      <div className="features">
        <div className="feature">
          <img src="/icons/original.png" alt="Original" />
          <h3>Original</h3>
          <p>Meticulous craftsmanship, true authentic beauty.</p>
        </div>
        <div className="feature">
          <img src="/icons/shipping.png" alt="Shipping" />
          <h3>Shipping</h3>
          <p>Enjoy fast, reliable worldwide shipping.</p>
        </div>
        <div className="feature">
          <img src="/icons/fast-payment.png" alt="Fast Payment" />
          <h3>Fast Payment</h3>
          <p>Experience secure and swift payments.</p>
        </div>
        <div className="feature">
          <img src="/icons/affordable.png" alt="Affordable" />
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
          <div key={product.id} className="product">
            <img src={product.image} alt={product.type} className="product-image" />
            <div className="product-info">
              <h3>{product.type}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;