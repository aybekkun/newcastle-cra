import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../axios";

export const fetchMaterials = createAsyncThunk("lessons/fetchMaterials", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`subLessons2/${params.id}`, {
      cancelToken: params.cancelToken,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});

export const fetchFree = createAsyncThunk("lessons/fetchFree", async (params, thunkAPI) => {
  try {
    const response = await $authHost.get(`free/${params.id}`, {
      cancelToken: params.cancelToken,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
export const createLesson = createAsyncThunk("lessons/createLesson", async (params, thunkAPI) => {
  try {
    const response = await $host.post("lessons", params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const editLesson = createAsyncThunk("lessons/editLesson", async (params, thunkAPI) => {
  const { id, ...data } = params;
  try {
    const response = await $host.put(`lessons/${id}`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});
export const deleteLesson = createAsyncThunk("lessons/deleteLesson", async (params, thunkAPI) => {
  const { id } = params;
  try {
    const response = await $host.delete(`lessons/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const createSubLesson = createAsyncThunk("lessons/createSubLesson", async (params, thunkAPI) => {
  try {
    const response = await $host.post("subLessons", params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const editSubLesson = createAsyncThunk("lessons/editSubLesson", async (params, thunkAPI) => {
  try {
    const { id, ...data } = params;
    const response = await $host.put(`subLessons/${id}`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});
export const deleteSubLesson = createAsyncThunk("lessons/deleteSubLesson", async (params, thunkAPI) => {
  try {
    const { id } = params;
    const response = await $host.delete(`subLessons/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const createSubSubLesson = createAsyncThunk("lessons/createSubSubLesson", async (params, thunkAPI) => {
  try {
    const response = await $host.post("subLessons2", params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const deleteSubSubLesson = createAsyncThunk("lessons/deleteSubSubLesson", async (params, thunkAPI) => {
  try {
    const { id } = params;
    const response = await $host.delete(`subLessons2/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const updateSubSubLesson = createAsyncThunk("lessons/createSubSubLesson", async (params, thunkAPI) => {
  const { id, ...data } = params;
  try {
    const response = await $host.put(`subLessons2/${id}`, data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});

export const createTest = createAsyncThunk("lessons/tests", async (params, thunkAPI) => {
  try {
    const response = await $host.post("tests", params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lesson");
  }
});
