// SpecialDealsCarousel.js
import React, { useState, useEffect } from 'react';
import './specialDealCarousel.css'; // Import CSS file for styling

const images = [
  'https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457481_U9HwJCzC5zvYApnE0UMpzroqqVsUjocF.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14NETh5SYT4HXp3KvnmgmvB5xNqj0a1oEKw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi4gPwjRV_OZLBzt0llgZxYsgmVRLt9z6gA&s',
  'https://static.vecteezy.com/system/resources/thumbnails/036/135/738/small_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg',
  
];

const SpecialDealsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialDealsCarousel;
