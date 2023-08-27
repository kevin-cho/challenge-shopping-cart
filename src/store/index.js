import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import products from './products/slice';

export const store = configureStore({
  reducer: {
    cart,
    products,
  },
})
