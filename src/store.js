import { configureStore, createSlice } from '@reduxjs/toolkit';

// Products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, brand: 'Nike', model: 'Air Max', size: 10, price: 120 },
    { id: 2, brand: 'Adidas', model: 'Ultraboost', size: 9, price: 150 },
    // Add more products as needed
  ],
  reducers: {}
});

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    }
  }
});

// User preferences slice
const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: { brands: [], sizes: [] },
  reducers: {
    addBrandPreference: (state, action) => {
      state.brands.push(action.payload);
    },
    addSizePreference: (state, action) => {
      state.sizes.push(action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addBrandPreference, addSizePreference } = preferencesSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    preferences: preferencesSlice.reducer,
  }
});

export default store;