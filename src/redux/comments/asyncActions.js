import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";
export const fetchComments = createAsyncThunk("comments/fetchComments", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`comments`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("comments");
  }
});
export const fetchCommentsInfo = createAsyncThunk("comments/fetchCommentsInfo", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`comments`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("comments");
  }
});
export const fetchUserComments = createAsyncThunk("comments/fetchUserComments", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`comments`, { params: params });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("comments");
  }
});
export const createComment = createAsyncThunk("comments/createComment", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`comments`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать коммент");
  }
});

export const deleteComment = createAsyncThunk("comments/deleteAdmin", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`comments/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить коммент");
  }
});

export const editComment = createAsyncThunk("comments/deleteAdmin", async (params, thunkAPI) => {
  const { id, ...data } = params;
  try {
    const response = await $host.put(`comments/${id}`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить коммент");
  }
});
