import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "./Auth/AuthSlice";
import subjectReducer from "./Subject/SubjectSlice";
import reviewsReducer from "./Review/reviewSlice";
import notesReducer from "./notes/notesSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "golden",
  storage,
};

// const abcReducer = (state = {}, action) => {
//     switch (action.type) {
//         case "SET_ABC":
//             return { ...state, ...action.payload };
//         default:
//             return state;
//     }}

const combineReducer = combineReducers({
  auth: AuthReducer,
  subject: subjectReducer,
  notes: notesReducer,
  reviews: reviewsReducer,
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
