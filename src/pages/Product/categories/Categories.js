import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
import { addToCartAction } from '../../Cart/actions/cartAction';
import '../homeContainer/style.css'; // Import the CSS file

const mockProducts = [
  // Your product data
  {
    id: 1,
    saleText: "Save 45%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAkmnmvPGZeajoDjSpmfGBvZE67h7E3HVw&s",
    title: "Callus Remover for Feet with 3 Custom Rollers & Led Light",
    rating: "4.8",
    newPrice: "Rs. 1,099.00",
    oldPrice: "Rs. 1,999.00"
  },
  {
    id: 2,
    saleText: "Save 30%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Portable Blender for Smoothies and Shakes",
    rating: "4.5",
    newPrice: "Rs. 2,099.00",
    oldPrice: "Rs. 2,999.00"
  },
  {
    id: 3,
    saleText: "Save 25%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Electric Kettle ghsdhsdhfvjhgfhdsgfhsjhfgjhfghgfjhsdfgsdjhfgjhfgjhdgfjhsgfhgfjgsdjhfgshfgjhsfhfdjhfgfgjhsdfgjhsdfjg",
    rating: "4.6",
    newPrice: "Rs. 999.00",
    oldPrice: "Rs. 1,299.00"
  },{
    id: 1,
    saleText: "Save 45%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAkmnmvPGZeajoDjSpmfGBvZE67h7E3HVw&s",
    title: "Callus Remover for Feet with 3 Custom Rollers & Led Light",
    rating: "4.8",
    newPrice: "Rs. 1,099.00",
    oldPrice: "Rs. 1,999.00"
  },
  {
    id: 2,
    saleText: "Save 30%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Portable Blender for Smoothies and Shakes",
    rating: "4.5",
    newPrice: "Rs. 2,099.00",
    oldPrice: "Rs. 2,999.00"
  },
  {
    id: 3,
    saleText: "Save 25%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Electric Kettle",
    rating: "4.6",
    newPrice: "Rs. 999.00",
    oldPrice: "Rs. 1,299.00"
  },{
    id: 1,
    saleText: "Save 45%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAkmnmvPGZeajoDjSpmfGBvZE67h7E3HVw&s",
    title: "Callus Remover for Feet with 3 Custom Rollers & Led Light",
    rating: "4.8",
    newPrice: "Rs. 1,099.00",
    oldPrice: "Rs. 1,999.00"
  },
  {
    id: 2,
    saleText: "Save 30%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Portable Blender for Smoothies and Shakes",
    rating: "4.5",
    newPrice: "Rs. 2,099.00",
    oldPrice: "Rs. 2,999.00"
  },
  {
    id: 3,
    saleText: "Save 25%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6Eyx7m7L6HYBKCMFUcVfwAxhez1fWUY-DQ&s",
    title: "Electric Kettle",
    rating: "4.6",
    newPrice: "Rs. 999.00",
    oldPrice: "Rs. 1,299.00"
  }
];

const ProductContainer = ({ addToCart }) => {
    const { id } = useParams();
  const [visibleProducts, setVisibleProducts] = useState(mockProducts.slice(0, 4));
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleViewMore = () => {
    setVisibleProducts(mockProducts);
    setViewMoreClicked(true);
  };

  return (
    <div>
      <div className="product-header">
        <h2 className="product-title">{id}</h2>
        <div className="product-underline"></div>
        <p className="product-subtitle">Best Collection For Drinkware</p>
      </div>

      <ProductCard
        products={visibleProducts}
        onAddToCart={handleAddToCart}
      />

      <div className="product-view-more">
        {visibleProducts.length < mockProducts.length && (
          <button
            onClick={handleViewMore}
            className={viewMoreClicked ? "view-more-btn clicked" : "view-more-btn"}
          >
            View All &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (productData) => dispatch(addToCartAction(productData)),
});

export default connect(null, mapDispatchToProps)(ProductContainer);
