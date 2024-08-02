import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, onCheckout }) => {
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Booking Cart</h2>
      {cart.length === 0 ? (
        <p>No Rooms Available</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className='add' onClick={() => increaseQuantity(item.id)}>+</button>
                <button className='remove' onClick={() => decreaseQuantity(item.id)}>-</button>
                <button className='delete' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Total Cost: ${totalCost}</p>
            <button onClick={onCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
