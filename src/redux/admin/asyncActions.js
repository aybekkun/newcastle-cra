import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchAdmins = createAsyncThunk("admins/fetchAdmins", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`admins`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Загрузить админа");
  }
});

export const createAdmin = createAsyncThunk("admins/createAdmin", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`admins`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать admina");
  }
});

export const deleteAdmin = createAsyncThunk("admins/deleteAdmin", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`admins/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить admina");
  }
});
