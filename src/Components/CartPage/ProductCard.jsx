import React from 'react';
import './ProductCard.css';
import productImage from '../../Assets/Product1.png';
import like from '../../Assets/like.png'

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImage} alt="Neckpiece" className='Pimage'/>
        <img src={like} alt="like" className="favorite-icon"/>
      </div>
      <div className="product-info">
        <p>Neckpiece</p>
        <p>$45</p>
      </div>
      <div className="product-actions">
        <div className='span'>
            <span>-</span>
            <span>2</span>
            <span>+</span>
        </div>
        <div className="buy-now">Buy</div>
      </div>
    </div>
  );
};

export default ProductCard;
        
