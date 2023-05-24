import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import shopReducer from './shop/shopSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});
