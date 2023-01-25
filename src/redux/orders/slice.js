import { createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchOrders } from "./asyncActions";
const initialState = {
  orders: [],
  total: 1,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: true,
  count: 0,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersPage(state, action) {
      state.currentPage = action.payload;
    },
    setCount(state) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.total = 1;
      state.orders = [];
    });
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
export const { setOrdersPage, setCount } = ordersSlice.actions;

export default ordersSlice.reducer;
