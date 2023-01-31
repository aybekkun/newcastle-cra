import { createSlice } from "@reduxjs/toolkit";
import { createSubSubLesson, fetchFree, fetchMaterials } from "./asyncActions";
const initialState = {
  blocks: [],
  lesson: {
    id: 0,
    name: "",
    sub_lesson_id: 0,
    lesson_id: 0,
    data: [],
  },
  isMaterialLoading: false,
  isSending: false,
  count: 0,
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    setLessonsCount(state) {
      state.count++;
    },
    setClearBlocks(state) {
      state.blocks = [];
    },
  },
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
      state.lesson = { id: 0, name: "", sub_lesson_id: 0, lesson_id: 0, data: [] };
      state.blocks = [];
    });
    builder.addCase(fetchFree.fulfilled, (state, action) => {
      state.blocks = action.payload.data;
      state.isMaterialLoading = false;
    });
    builder.addCase(fetchFree.pending, (state, action) => {
      state.isMaterialLoading = true;
    });
    builder.addCase(fetchFree.rejected, (state, action) => {
      state.isMaterialLoading = false;
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
export const { setLessonsCount, setClearBlocks } = lessonsSlice.actions;

export default lessonsSlice.reducer;
