import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './cart/slice';
import products from './products/slice';

const rootReducer = combineReducers({
  cart,
  products,
})

export const setupStore = preloadedState => configureStore({
  reducer: rootReducer,
  preloadedState,
})
