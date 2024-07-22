import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.brand} {item.model} (Size: {item.size}) - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;