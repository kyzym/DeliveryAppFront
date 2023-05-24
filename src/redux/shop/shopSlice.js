import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    selectedShop: null,
  },
  reducers: {
    selectShop: (state, action) => {
      state.selectedShop = action.payload;
    },
    clearSelectedShop: (state) => {
      state.selectedShop = null;
    },
  },
});

export const { selectShop } = shopSlice.actions;

export default shopSlice.reducer;
