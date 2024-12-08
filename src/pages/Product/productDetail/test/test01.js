import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './PhotoSection.css'; // Import the CSS file for styling

function PhotoSection({ images, selectedImageIndex, onThumbnailClick, onCarouselChange }) {
  const [zoomStyle, setZoomStyle] = useState({});
  const [zoomRect, setZoomRect] = useState({});
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const zoomRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const carousel = carouselRef.current;
    const zoomBox = zoomRef.current;
    if (!carousel || !zoomBox) return;

    const { left, top, width, height } = carousel.getBoundingClientRect();
    const x = e.pageX - left;
    const y = e.pageY - top;

    const zoomWidth = 150;
    const zoomHeight = 150;

    const leftPosition = Math.max(0, Math.min(x - zoomWidth / 2, width - zoomWidth));
    const topPosition = Math.max(0, Math.min(y - zoomHeight / 2, height - zoomHeight));

    const zoomRatioX = zoomBox.offsetWidth / zoomWidth;
    const zoomRatioY = zoomBox.offsetHeight / zoomHeight;

    const backgroundPositionX = (leftPosition / (width - zoomWidth)) * 100;
    const backgroundPositionY = (topPosition / (height - zoomHeight)) * 100;

    setZoomStyle({
      backgroundImage: `url(${images[selectedImageIndex]})`,
      backgroundPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
      backgroundSize: `${width * zoomRatioX}px ${height * zoomRatioY}px`,
    });

    setZoomRect({
      left: leftPosition,
      top: topPosition,
      width: zoomWidth,
      height: zoomHeight,
    });

    setIsZoomVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsZoomVisible(false);
    }
  };

  if (isMobile) {
    return (
      <div className="photo-section-mobile">
        <div className="carousel-container-mobile">
          <Carousel
            selectedItem={selectedImageIndex}
            onChange={onCarouselChange}
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-prev-mobile">
                  <IoIosArrowBack />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next-mobile">
                  <IoIosArrowForward />
                </button>
              )
            }
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-image-wrapper">
                <img src={image} alt={`Product Image ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="images-row-mobile">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail-wrapper-mobile ${selectedImageIndex === index ? 'selected' : ''}`}
              onClick={() => onThumbnailClick(index)}
            >
              <img src={image} alt={`Product Thumbnail ${index + 1}`} className="thumbnail-mobile" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="photo-section-desktop">
      <div className="images-column-desktop">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${selectedImageIndex === index ? 'selected' : ''}`}
            onClick={() => onThumbnailClick(index)}
          >
            <img src={image} alt={`Product Thumbnail ${index + 1}`} className="thumbnail" />
          </div>
        ))}
      </div>

      <div className="carousel-zoom-container-desktop">
        <div
          className="carousel-column"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          <Carousel
            selectedItem={selectedImageIndex}
            onChange={onCarouselChange}
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-prev">
                  <IoIosArrowBack />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next">
                  <IoIosArrowForward />
                </button>
              )
            }
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-image-wrapper">
                <img src={image} alt={`Product Image ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Carousel>
          <div
            className="zoom-indicator"
            style={{
              display: isZoomVisible ? 'block' : 'none',
              left: `${zoomRect.left}px`,
              top: `${zoomRect.top}px`,
              width: `${zoomRect.width}px`,
              height: `${zoomRect.height}px`,
            }}
          ></div>
        </div>
        <div
          className={`zoom-result ${isZoomVisible ? 'visible' : ''}`}
          style={zoomStyle}
          ref={zoomRef}
        ></div>
      </div>
    </div>
  );
}

export default PhotoSection;
