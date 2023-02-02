import { createSlice } from "@reduxjs/toolkit";
import { createCourse, fetchCourse, fetchCourseFree, fetchCourses, fetchCoursesFooter } from "./asyncActions";
const initialState = {
  data: [],
  footerData: [],
  course: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    status: null,
    started_at: null,
    finished_at: null,
    image: "",
    sub_lesson_2s_id: 0,
    learners_count: 0,
    rating_count: 0,
    rating_mark_overall: 0,
    sub_lesson_2s: [],
    lessons: [],
  },
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
    builder.addCase(fetchCoursesFooter.fulfilled, (state, action) => {
      state.footerData = action.payload.data;
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
    builder.addCase(fetchCourseFree.fulfilled, (state, action) => {
      state.course = action.payload.data;
      state.materials = action.payload.data.lessons;
      state.isLoading = false;
    });
    builder.addCase(fetchCourseFree.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCourseFree.rejected, (state, action) => {
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
export const { setCourse, setCoursesCount } = coursesSlice.actions;

export default coursesSlice.reducer;
