import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const createOrder = createAsyncThunk("orders/createOrder", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`orders`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
