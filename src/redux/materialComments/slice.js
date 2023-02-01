import { createSlice } from "@reduxjs/toolkit";
import { fetchMaterialComments, fetchMaterialCommentsInfo, fetchUserMaterialComments } from "./asyncActions";

const initialState = {
  materialComments: [],
  userMaterialComments: [],
  total: 0,
  pages: 0,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: false,
  count: 0,
};

export const materialCommentsSlice = createSlice({
  name: "materialComments",
  initialState,
  reducers: {
    setMaterialCommentsPage(state, action) {
      state.currentPage = action.payload;
    },
    setMaterialCommentsCount(state) {
      state.count++;
    },
    setMaterialCommentsClear(state) {
      state.materialComments = [];
      state.userMaterialComments = [];
      state.page = 0;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaterialCommentsInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.total = action.payload.total;
      state.pages = Math.ceil(action.payload.total / 5);
    });
    builder.addCase(fetchMaterialComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.materialComments = [...state.materialComments, ...action.payload.data];
      state.total = action.payload.total;
      state.pages = Math.ceil(action.payload.total / 5);
    });
    builder.addCase(fetchMaterialComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMaterialComments.rejected, (state, action) => {
      state.isLoading = false;
      state.materialComments = [];
      state.total = 0;
      state.pages = 0;
    });
    builder.addCase(fetchUserMaterialComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userMaterialComments = action.payload.data;
    });
    builder.addCase(fetchUserMaterialComments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserMaterialComments.rejected, (state, action) => {
      state.isLoading = false;
      state.userMaterialComments = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setMaterialCommentsPage, setMaterialCommentsCount, setMaterialCommentsClear } =
  materialCommentsSlice.actions;

export default materialCommentsSlice.reducer;
