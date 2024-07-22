import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store';

const Home = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.brand} {product.model} (Size: {product.size}) - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;