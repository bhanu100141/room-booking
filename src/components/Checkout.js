import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cart, onBack }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    number:'',
    paymentDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to the server
    console.log('Booking Details:', bookingDetails);
    alert('Booking successful!');
    // Clear the cart or reset the state as needed
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={bookingDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={bookingDetails.email} onChange={handleChange} required />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={bookingDetails.number} onChange={handleChange} required />
        </label>
        <label>
          Payment Details:
          <input type="text" name="paymentDetails" value={bookingDetails.paymentDetails} onChange={handleChange} required />
        </label>
        <div className="checkout-summary">
          <p>Total Cost: ${totalCost}</p>
          <button className='confirm' type="submit">Confirm Booking</button>
        </div>
      </form>
      <button className='back' onClick={onBack}> Back to Cart</button>
    </div>
  );
};

export default Checkout;
