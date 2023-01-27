import { createSlice } from "@reduxjs/toolkit";
import { createStudent, fetchStudents } from "./asyncActions";
const initialState = {
  students: [],
  total: 1,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: true,
  count: 0,
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudentsPage(state, action) {
      state.currentPage = action.payload;
    },
    setStudentsCount(state) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(fetchStudents.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.isLoading = false;
      state.total = 1;
      state.students = [];
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      state.isSending = false;
    });
    builder.addCase(createStudent.pending, (state, action) => {
      state.isSending = true;
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.isSending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setStudentsPage,setStudentsCount } = studentsSlice.actions;

export default studentsSlice.reducer;
