import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../api/api";

export const fetchDrugstoreThunk = createAsyncThunk(
  "fetchDrugstores",
  async (_, thunkApi) => {
    try {
      const { data } = await pharmacyApi.get(`stores`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
