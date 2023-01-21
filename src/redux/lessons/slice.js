import { createSlice } from "@reduxjs/toolkit";
import { createSubSubLesson, fetchMaterials } from "./asyncActions";
const initialState = {
  blocks: [],
  lesson: {},
  isMaterialLoading: false,
  isSending: false,
};

export const coursesSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMaterials.fulfilled, (state, action) => {
      state.lesson = action.payload;
      state.blocks = action.payload.data;
      state.isMaterialLoading = false;
    });
    builder.addCase(fetchMaterials.pending, (state, action) => {
      state.isMaterialLoading = true;
    });
    builder.addCase(fetchMaterials.rejected, (state, action) => {
      state.isMaterialLoading = false;
      state.lesson = {};
      state.blocks = [];
    });
    builder.addCase(createSubSubLesson.fulfilled, (state, action) => {
      state.isSending = false;
    });
    builder.addCase(createSubSubLesson.pending, (state, action) => {
      state.isSending = true;
    });
    builder.addCase(createSubSubLesson.rejected, (state, action) => {
      state.isSending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
