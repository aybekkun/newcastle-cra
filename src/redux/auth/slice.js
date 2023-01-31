import { createSlice } from "@reduxjs/toolkit";
import { userAuth, userCheck, userReg } from "./asyncActions";
const initialState = {
  user: {
    id: 0,
    name: "",
    phone: "",
    role: "guest",
    courses: [
      {
        status: false,
        course_title: "",
        course_id: 0,
        course_time: 0,
        course_complate_done: 0,
        user_id: 0,
      },
    ],
    orders: [],
  },
  token: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = { id: 0, name: "", phone: "", role: "guest", courses: [], orders: [] };
      window.localStorage.removeItem("token");
      state.token = "";
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuth.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isAuth = true;
      window.localStorage.setItem("token", action.payload.data.token);
    });
    builder.addCase(userAuth.pending, (state, action) => {});
    builder.addCase(userAuth.rejected, (state, action) => {
      state.user = { id: 0, name: "", phone: "", role: "guest", courses: [], orders: [] };
      state.isAuth = false;
      window.localStorage.removeItem("token");
    });
    builder.addCase(userReg.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isAuth = true;
      window.localStorage.setItem("token", action.payload.data.token);
    });
    builder.addCase(userReg.pending, (state, action) => {});
    builder.addCase(userReg.rejected, (state, action) => {
      state.user = { id: 0, name: "", phone: "", role: "guest", courses: [], orders: [] };
      state.isAuth = false;
      window.localStorage.removeItem("token");
    });
    builder.addCase(userCheck.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.isAuth = true;
    });
    builder.addCase(userCheck.pending, (state, action) => {});
    builder.addCase(userCheck.rejected, (state, action) => {
      state.isAuth = false;
      window.localStorage.removeItem("token");
      state.user = { id: 0, name: "", phone: "", role: "guest", courses: [], orders: [] };
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
