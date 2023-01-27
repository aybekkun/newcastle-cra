import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`students`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const createStudent = createAsyncThunk("students/createOrder", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`students`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const deleteStudent = createAsyncThunk("students/deleteStudent", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`students/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
