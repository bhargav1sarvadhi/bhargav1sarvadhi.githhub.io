import React from 'react';
// import "../pages/Product.css";

function Product({ 
  saleText, 
  imageUrl, 
  title, 
  rating, 
  newPrice, 
  oldPrice, 
  onAddToCart 
}) {
  return (
    <div className="product-card">
      <div className="product-card__header">
        {saleText && <div className="product-card__sale">{saleText}</div>}
        <img 
          src={imageUrl} 
          alt={title} 
          className="product-card__image" 
        />
      </div>
      <div className="product-card__body">
        <div className="product-card__title-rating">
          <h2 className="product-card__title">{title}</h2>
          <div className="product-card__rating">
            {rating} <span className="product-card__star">★</span>
          </div>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-new">{newPrice}</span>
          {oldPrice && <span className="product-card__price-old">{oldPrice}</span>}
        </div>
        <button className="product-card__button" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
