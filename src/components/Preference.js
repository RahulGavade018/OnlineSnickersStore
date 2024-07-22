import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBrandPreference, addSizePreference } from '../store';

const Preferences = () => {
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  const preferences = useSelector(state => state.preferences);

  const handleAddBrand = () => {
    if (brand) {
      dispatch(addBrandPreference(brand));
      setBrand('');
    }
  };

  const handleAddSize = () => {
    if (size) {
      dispatch(addSizePreference(size));
      setSize('');
    }
  };

  return (
    <div>
      <h1>User Preferences</h1>
      <div>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Add Brand"
        />
        <button onClick={handleAddBrand}>Add Brand</button>
      </div>
      <div>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Add Size"
        />
        <button onClick={handleAddSize}>Add Size</button>
      </div>
      <h2>Preferred Brands</h2>
      <ul>
        {preferences.brands.map((b, index) => (
          <li key={index}>{b}</li>
        ))}
      </ul>
      <h2>Preferred Sizes</h2>
      <ul>
        {preferences.sizes.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Preferences;