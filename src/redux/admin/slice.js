import { createSlice } from "@reduxjs/toolkit";
import { fetchAdmins } from "./asyncActions";

const initialState = {
  admins: [],
  total: 1,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: false,
  count: 0,

};

export const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    setAdminsPage(state, action) {
      state.currentPage = action.payload;
    },
    setAdminsCount(state) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdmins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.admins = action.payload.data;
    });
    builder.addCase(fetchAdmins.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdmins.rejected, (state, action) => {
      state.isLoading = false;
      state.admins = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setAdminsPage, setAdminsCount } = adminsSlice.actions;

export default adminsSlice.reducer;
