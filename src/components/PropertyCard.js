import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property, addToCart }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title}/>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <button onClick={() => addToCart(property)}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
