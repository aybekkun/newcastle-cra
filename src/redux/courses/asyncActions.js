import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";
export const fetchCourses = createAsyncThunk("courses/fetchCourses", async (params, thunkAPI) => {
  try {
    const response = await $host.get("courses", {
      params: params,
      cancelToken: params.cancelToken,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать курсов");
  }
});

export const fetchCourse = createAsyncThunk("courses/fetchCourse", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`courses/${params.id}`, {
      cancelToken: params.cancelToken,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать курсов");
  }
});

export const createCourse = createAsyncThunk("courses/createCourse", async (params, thunkAPI) => {
  try {
    const response = await $host.post("courses", params, {
      headers: {
        "Content-type": "multipart/form-data",
        cancelToken: params.cancelToken,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать курсов");
  }
});

export const deleteCourse = createAsyncThunk("courses/deleteCourse", async (params, thunkAPI) => {
  try {
    const response = await $host.delete(`courses/${params.id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить курсов");
  }
});
