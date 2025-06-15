import React from 'react';
import { useCart } from './CartContext';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const handlePlaceOrder = () => {
    alert('Order placed!');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      {state.items.length > 0 && (
        <button onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
};

export default CartPage;
