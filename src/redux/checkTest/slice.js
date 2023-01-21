import { createSlice } from "@reduxjs/toolkit";
import { createCheckTest } from "./asyncActions";
const initialState = {};

export const checkTestSlice = createSlice({
  name: "checkTest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCheckTest.fulfilled, (state, action) => {});
    builder.addCase(createCheckTest.pending, (state, action) => {});
    builder.addCase(createCheckTest.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = checkTestSlice.actions;

export default checkTestSlice.reducer;
