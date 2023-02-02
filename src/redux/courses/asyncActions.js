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
export const fetchCoursesFooter = createAsyncThunk("courses/fetchCoursesFooter", async (params, thunkAPI) => {
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
export const fetchCourseFree = createAsyncThunk("courses/fetchCourseFree", async (params, thunkAPI) => {
  try {
    const response = await $host.get(`freecourses/${params.id}`, {
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

export const updateCourse = createAsyncThunk("courses/updateCourse", async (params, thunkAPI) => {
  const { id, fd } = params;
  try {
    const response = await $host.post(`courses/${id}`, fd, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось удалить курсов");
  }
});
