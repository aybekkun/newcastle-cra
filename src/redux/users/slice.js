import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./asyncActions";

const initialState = {
  users: [],
  user: {
    id: 0,
    name: "",
  },
  total: 1,
  currentPage: 1,
  isSending: false,
  isLoading: false,
  error: false,
  count: 0,
  openDrawer: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersPage(state, action) {
      state.currentPage = action.payload;
    },
    setUsersCount(state) {
      state.count++;
    },
    setOpenDrawer(state) {
      state.openDrawer = true;
    },
    setCloseDrawer(state) {
      state.openDrawer = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data;
      state.total = action.payload.total;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.total = 0;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUsersPage, setUsersCount, setCloseDrawer, setOpenDrawer, setUser } = usersSlice.actions;

export default usersSlice.reducer;
