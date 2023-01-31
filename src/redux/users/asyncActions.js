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

export const resetPassword = createAsyncThunk("users/resetPassword", async (params, thunkAPI) => {
  try {
    const response = await $host.put(`reset-pass/${params.id}`, { password: params.password });
    return response.data;
  } catch (error) {
    alert("Wrong");
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const updateUser = createAsyncThunk("users/updateUser", async (params, thunkAPI) => {
  const { id, ...data } = params;
  try {
    const response = await $host.put(`users/${id}`, data);
    return response.data;
  } catch (error) {
    alert("Wrong");
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
