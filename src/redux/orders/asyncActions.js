import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`orders`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const createOrder = createAsyncThunk("orders/createOrder", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`orders`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const deleteOrder = createAsyncThunk("orders/deleteOrder", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`orders/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
