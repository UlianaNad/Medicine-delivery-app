import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsThunk } from "./productsThunk.js";
const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const productReducer = productsSlice.reducer;
