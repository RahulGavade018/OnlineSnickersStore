import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../store';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (e, product) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
      dispatch(addToCart({ ...product, quantity: value }));
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.brand} {item.model} (Size: {item.size}) - ${item.price} x {item.quantity}
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(e, item)}
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;