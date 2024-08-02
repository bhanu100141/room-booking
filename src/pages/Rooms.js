import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import './Rooms.css';

// Sample data with the 'customers' property
const sampleProperties = [
  { id: 1, title: 'Single Room', description: 'A cozy single room.', price: 50, image: 'image/single1.jpg', type: 'single', customers: 1 },
  { id: 2, title: 'Deluxe Room', description: 'A luxurious deluxe room.', price: 100, image: 'image/d1.jpg', type: 'deluxe', customers: 2 },
  { id: 3, title: 'Double Deluxe Room', description: 'A spacious double deluxe room.', price: 150, image: 'image/dd1.webp', type: 'double-deluxe', customers: 3 },
  { id: 4, title: 'Single Room', description: 'A cozy single room.', price: 50, image: 'image/single2.jpeg', type: 'single', customers: 1 },
  { id: 5, title: 'Deluxe Room', description: 'A luxurious deluxe room.', price: 100, image: 'image/d2.jpg', type: 'deluxe', customers: 2 },
  { id: 6, title: 'Double Deluxe Room', description: 'A spacious double deluxe room.', price: 150, image: 'image/dd2.jpeg', type: 'double-deluxe', customers: 3 },
  { id: 7, title: 'Single Room', description: 'A cozy single room.', price: 50, image: 'image/single3.jpeg', type: 'single', customers: 1 },
  { id: 8, title: 'Deluxe Room', description: 'A luxurious deluxe room.', price: 100, image: 'image/d3.jpg', type: 'deluxe', customers: 2 },
  { id: 9, title: 'Double Deluxe Room', description: 'A spacious double deluxe room.', price: 150, image: 'image/dd3.jpeg', type: 'double-deluxe', customers: 3 },
  { id: 10, title: 'Single Room', description: 'A cozy single room.', price: 50, image: 'image/single4.jpg', type: 'single', customers: 1 },
  { id: 11, title: 'Deluxe Room', description: 'A luxurious deluxe room.', price: 100, image: 'image/d4.jpg', type: 'deluxe', customers: 2 },
  { id: 12, title: 'Double Deluxe Room', description: 'A spacious double deluxe room.', price: 150, image: 'image/dd4.jpg', type: 'double-deluxe', customers: 3 },
  { id: 13, title: 'Single Room', description: 'A cozy single room.', price: 50, image: 'image/single5.avif', type: 'single', customers: 1 },
  { id: 14, title: 'Deluxe Room', description: 'A luxurious deluxe room.', price: 100, image: 'image/d5.jpg', type: 'deluxe', customers: 2 },
  { id: 15, title: 'Double Deluxe Room', description: 'A spacious double deluxe room.', price: 150, image: 'image/dd5.jpg', type: 'double-deluxe', customers: 3 },
];

const Rooms = () => {
  const [priceFilter, setPriceFilter] = useState('');
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  const handlePriceFilterChange = (e) => setPriceFilter(e.target.value);
  const handleRoomTypeFilterChange = (e) => setRoomTypeFilter(e.target.value);

  const addToCart = (property) => {
    setCart((prevCart) => {
      const existingProperty = prevCart.find((item) => item.id === property.id);
      if (existingProperty) {
        return prevCart.map((item) =>
          item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...property, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (propertyId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== propertyId));
  };

  const increaseQuantity = (propertyId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === propertyId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (propertyId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === propertyId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const filteredProperties = sampleProperties.filter((property) => {
    return (
      (priceFilter === '' || (priceFilter === 'low' && property.price <= 100) || (priceFilter === 'high' && property.price > 100)) &&
      (roomTypeFilter === '' || property.type === roomTypeFilter)
    );
  });

  return (
    <div className="rooms">
      <h1>Rooms</h1>
      {!isCheckout ? (
        <>
          <div className="filters">
            <select onChange={handlePriceFilterChange} value={priceFilter}>
              <option value="">Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            <select onChange={handleRoomTypeFilterChange} value={roomTypeFilter}>
              <option value="">Room Type</option>
              <option value="single">Single Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="double-deluxe">Double Deluxe Room</option>
            </select>
            <select>
              <option value="">Customers</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              
            </select>
          </div>
          <div className="property-grid">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} addToCart={addToCart} />
            ))}
          </div>
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            onCheckout={() => setIsCheckout(true)}
          />
        </>
      ) : (
        <Checkout cart={cart} onBack={() => setIsCheckout(false)} />
      )}
    </div>
  );
};

export default Rooms;
