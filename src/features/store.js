import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "./Auth/AuthSlice";
import subjectReducer from "./Subject/SubjectSlice";
import storage from "redux-persist/lib/storage";
import facultyReducer from "./Faculty/FacultySlice";

const persistConfig = {
  key: "golden",
  storage,
};

const combineReducer = combineReducers({
  auth: AuthReducer,
  subject: subjectReducer,
  faculty: facultyReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore persist-related actions
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };
