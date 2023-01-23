import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchMaterials = createAsyncThunk("orders/fetchMaterials", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`subLessons2/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const createOrder = createAsyncThunk("orders/createOrder", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`order`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
