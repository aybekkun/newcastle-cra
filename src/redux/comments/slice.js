import { createSlice } from "@reduxjs/toolkit";
import { fetchComments, fetchCommentsInfo, fetchUserComments } from "./asyncActions";

const initialState = {
  comments: [],
  userComments: [],
  total: 0,
  pages: 0,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: false,
  count: 0,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setCommentsPage(state, action) {
      state.currentPage = action.payload;
    },
    setCommentsCount(state) {
      state.count++;
    },
    setCommentsClear(state) {
      state.comments = [];
      state.userComments = [];
      state.page = 0;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.total = action.payload.total;
      state.pages = Math.ceil(action.payload.total / 5);
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, ...action.payload.data];
      state.total = action.payload.total;
      state.pages = Math.ceil(action.payload.total / 5);
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.total = 0;
      state.pages = 0;
    });
    builder.addCase(fetchUserComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userComments = action.payload.data;
    });
    builder.addCase(fetchUserComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserComments.rejected, (state, action) => {
      state.isLoading = false;
      state.userComments = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCommentsPage, setCommentsCount, setCommentsClear } = commentsSlice.actions;

export default commentsSlice.reducer;
