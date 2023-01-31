import { createSlice } from "@reduxjs/toolkit";
import { createCourse, fetchCourse, fetchCourses } from "./asyncActions";
const initialState = {
  data: [],
  course: {},
  materials: [],
  isSending: false,
  isLoading: true,
  total: 0,
  count: 0,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse(state, action) {
      state.data.push(action.payload);
    },
    setCoursesCount(state) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.course = action.payload.data;
      state.materials = action.payload.data.lessons;
      state.isLoading = false;
    });
    builder.addCase(fetchCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.course = {};
      state.materials = [];
      state.isLoading = false;
    });
    builder.addCase(createCourse.pending, (state, action) => {
      state.isSending = true;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.isSending = false;
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.isSending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCourse,setCoursesCount } = coursesSlice.actions;

export default coursesSlice.reducer;
