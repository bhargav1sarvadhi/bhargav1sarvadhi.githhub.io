import React from 'react';
import Product from '../pages/Product'; // Adjust the import path as needed
import "../productCard/ProductCard.css";

function ProductCard({ products = [], onAddToCart }) {
  // Adding a default value of [] to `products` prop
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <Product
            key={product.id}
            saleText={product.saleText}
            imageUrl={product.imageUrl}
            title={product.title}
            rating={product.rating}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            onAddToCart={() => onAddToCart(product)}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductCard;
