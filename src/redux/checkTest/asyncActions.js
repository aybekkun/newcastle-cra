import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../axios";

export const createCheckTest = createAsyncThunk("checkTest/createCheckTest", async (params, thunkAPI) => {
  try {
    const response = await $host.post(`questions`, params);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Не удалось создать lessons");
  }
});
