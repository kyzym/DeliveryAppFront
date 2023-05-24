import { createSlice } from '@reduxjs/toolkit';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../helpers/localStorage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadFromLocalStorage('cart', []),
  reducers: {
    loadCart: (state) => state,
    addToCart: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage('cart', state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      saveToLocalStorage('cart', newState);
      return newState;
    },
    updateQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveToLocalStorage('cart', state);
    },
    clearCart: () => {
      saveToLocalStorage('cart', []);
      return [];
    },
  },
});

export const {
  loadCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
