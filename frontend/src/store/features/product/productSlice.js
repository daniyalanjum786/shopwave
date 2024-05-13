import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService.js";

const initialState = {
  products: null,
  status: "idle",
  error: null,
};
export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async (thunkAPI) => {
    try {
      return await productService.fetchProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
