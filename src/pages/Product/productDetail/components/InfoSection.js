import React, { useState } from 'react';
import './InfoSection.css';

function InfoSection({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isAdditionalInfoOpen, setIsAdditionalInfoOpen] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const toggleDescription = () => {
    setIsDescriptionOpen(prevState => !prevState);
  };

  const toggleAdditionalInfo = () => {
    setIsAdditionalInfoOpen(prevState => !prevState);
  };

  return (
    <div className="info-section">
      <h1 className="product-title">{product.title}</h1>
      <div className="ratings">
        Ratings: {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="star">
            {i < product.ratings ? '★' : '☆'}
          </span>
        ))}
        <span className="rating-count">({product.ratings})</span>
      </div>
      <div className="price-section">
        <div className="details-price-new">₹100{product.newPrice}</div>
        <div className="details-price-old">₹100{product.oldPrice}</div>
      </div>
      <div className="actions">
        <div className="quantity-control">
          <button className="quantity-button" onClick={decrementQuantity}>-</button>
          <div className="quantity-display">{quantity}</div>
          <button className="quantity-button" onClick={incrementQuantity}>+</button>
        </div>
        <button className="add-to-cart-button">Add To Cart</button>
        <button className="buy-now-button">Buy Now</button>
      </div>
      <div className="bulk-purchase">
        Want to buy this in bulk? <a href="/bulk-purchase">Click here</a>
      </div>

      {/* Collapsible Sections */}
      <div className="collapsible-section">
        <div className="collapsible-header" onClick={toggleDescription}>
          <h2>Product Description</h2>
          <span>{isDescriptionOpen ? '-' : '+'}</span>
        </div>
        {isDescriptionOpen && (
          <div className="collapsible-content">
            <table className="product-details-table">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>aa{product.type}</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>aa{product.color}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>aa{product.material}</td>
                  </tr>
                  <tr>
                    <td>Feature</td>
                    <td>aa{product.Feature} gm</td>
                  </tr>
                  <tr>
                    <td>Pack Contain</td>
                    <td>aa{product.capacity}</td>
                  </tr>
                  
                </tbody>
              </table>
            <p>Serve cold beverages in style with our Ribbed Jug and Glass Set, featuring a sleek pitcher and six matching tumblers. Each piece in this set boasts a stylish ribbed pattern tinted in subtle grey. The pitcher’s comfortable handle and easy-pour spout make serving fresh juice or chilled squash a breeze - excellent for complementing a hearty meal every morning. Use it every day or on special events to add a touch of elaborateness to your dining table.{product.description}</p>
          </div>
        )}
      </div>

      <div className="collapsible-section">
        <div className="collapsible-header" onClick={toggleAdditionalInfo}>
          <h2>Additional Information</h2>
          <span>{isAdditionalInfoOpen ? '-' : '+'}</span>
        </div>
        {isAdditionalInfoOpen && (
          <div className="collapsible-content">
            <div className="product-details-container">
              <h2>Product details</h2>
              <table className="product-details-table">
                <tbody>
                  <tr>
                    <td>Manufacturing Area</td>
                    <td>aa{product.manufacturingArea}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>aa{product.material}</td>
                  </tr>
                  <tr>
                    <td>Dimensions (L x B x H)</td>
                    <td>aa{product.dimensions}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>aa{product.weight} gm</td>
                  </tr>
                  <tr>
                    <td>Capacity</td>
                    <td>aa{product.capacity}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>aa{product.quantity}</td>
                  </tr>
                  <tr>
                    <td>Safety</td>
                    <td>aa{product.safety}</td>
                  </tr>
                  <tr>
                    <td>Usage</td>
                    <td>aa{product.usage}</td>
                  </tr>
                  <tr>
                    <td>Microwave Safe</td>
                    <td>{product.microwaveSafe ? 'Yes' : 'No'}</td>
                  </tr>
                </tbody>
              </table>
              <div className="care-instructions">
                <h3>Care Instructions</h3>
                <ul>
                  <li>Dishwasher safe.</li>
                  <li>Handwash recommended. To hand wash, use a soft sponge and mild dish soap to clean the surface gently. Refrain from using harsh scrubbers, steel wool, or abrasive cleaning agents.</li>
                  <li>The glassware set is durable but can chip or break if dropped or knocked against hard surfaces.</li>
                  <li>Do not expose the glassware set to extreme temperature changes.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoSection;
