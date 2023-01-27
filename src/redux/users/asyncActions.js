import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`users`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

