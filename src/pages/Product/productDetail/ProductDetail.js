import React, { useState } from 'react';
import PhotoSection from './components/PhotoSection';
import InfoSection from './components/InfoSection';
import './ProductDetail.css'; // Import the CSS file for styling

function ProductDetailPage() {
  const [product] = useState({
    id: 1,
    title: 'Ribbed Jug and Glass Set',
    images: [
      'https://5.imimg.com/data5/GO/DU/JU/SELLER-79865954/drinking-glasses.jpg',
      'https://www.ikea.com/in/en/images/products/storsint-glass-clear-glass__0640888_pe700134_s5.jpg?f=s',
      'https://m.media-amazon.com/images/I/71+tPqPzSXL.jpg',
      'https://m.media-amazon.com/images/I/71zQ7hrmNqL._AC_UF894,1000_QL80_.jpg',
    ],
    price: 1499,
    ratings: 4,
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCarouselChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="product-detail-page">
      <PhotoSection
        images={product.images}
        selectedImageIndex={selectedImageIndex}
        onThumbnailClick={handleThumbnailClick}
        onCarouselChange={handleCarouselChange}
      />
      <InfoSection product={product} />
    </div>
  );
}

export default ProductDetailPage;
