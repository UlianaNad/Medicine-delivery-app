import { createSlice } from "@reduxjs/toolkit";
import { fetchDrugstoreThunk } from "./drugstoreThunk.js";

const initialState = {
  drugstores: [],
  loading: false,
  error: "",
};

export const drugstoreSlice = createSlice({
  name: "drugstores",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugstoreThunk.fulfilled, (state, action) => {
        state.drugstores = action.payload;
        state.loading = false;
      })
      .addCase(fetchDrugstoreThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDrugstoreThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const drugstoreReducer = drugstoreSlice.reducer;
