import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./asyncActions";
const initialState = { isSending: false, error: true };

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isSending = false;
    });
    builder.addCase(createOrder.pending, (state, action) => {
      state.isSending = true;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isSending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = ordersSlice.actions;

export default ordersSlice.reducer;
