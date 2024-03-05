import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmacyApi } from "../api/api";

export const fetchProductsThunk = createAsyncThunk(
  "fetch",
  async (_, thunkApi) => {
    try {
      const { data } = await pharmacyApi.get(`stores`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// export const fetchPharmacyThunk = createAsyncThunk(
//     "fetchPharmacy",
//     async ({ page, limit }, thunkApi) => {
//       try {
//         const { data } = await pharmacyApi.get(
//           `pharmacy?page=${page}&limit=${limit}`
//         );
//         return data;
//       } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//       }
//     }
//   );
