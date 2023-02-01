import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import courses from "./courses/slice";
import lessons from "./lessons/slice.js";
import auth from "./auth/slice.js";
import checkTest from "./checkTest/slice.js";
import orders from "./orders/slice.js";
import students from "./students/slice.js";
import users from "./users/slice.js";
import admins from "./admin/slice";
import comments from "./comments/slice";
import materialComments from "./materialComments/slice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const authReducer = persistReducer(persistConfig, auth);

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses,
    lessons,
    checkTest,
    orders,
    students,
    users,
    admins,
    comments,
    materialComments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;
