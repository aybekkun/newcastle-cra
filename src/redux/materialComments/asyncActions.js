import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";
export const fetchMaterialComments = createAsyncThunk("materialComments/fetchMaterialComments", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`feedbacks`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("feedbacks");
  }
});
export const fetchMaterialCommentsInfo = createAsyncThunk("materialComments/fetchMaterialCommentsInfo", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`feedbacks`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("feedbacks");
  }
});
export const fetchUserMaterialComments = createAsyncThunk("materialComments/fetchUserMaterialComments", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`feedbacks`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("feedbacks");
  }
});
export const createMaterialComment = createAsyncThunk("materialComments/createComment", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`feedbacks`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать коммент");
  }
});

export const deleteMaterialComment = createAsyncThunk("materialComments/deleteAdmin", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`feedbacks/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить коммент");
  }
});

