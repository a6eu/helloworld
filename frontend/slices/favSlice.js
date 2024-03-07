import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    productIds: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload;
      if (!state.productIds.includes(productId)) {
        state.productIds.push(productId);
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.productIds = state.productIds.filter((id) => id !== productId);
    },
    clearFavorites: (state) => {
      state.productIds = [];
    },
  },
});

export const { addProduct, removeProduct, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
