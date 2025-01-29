import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "./Auth/AuthSlice";
import subjectReducer from "./Subject/SubjectSlice";
import reviewsReducer from "./Review/reviewSlice";
import notesReducer from "./notes/notesSlice";
import storage from "redux-persist/lib/storage";
import orderReducer from "./order/PaymentSlice";
import purchaseReducer from "./Previous_Purchase/purchaseSlice";

const persistConfig = {
  key: "golden",
  storage,
};

const combineReducer = combineReducers({
  auth: AuthReducer,
  subjects: subjectReducer,
  notes: notesReducer,
  order: orderReducer,
  reviews: reviewsReducer,
  purchases: purchaseReducer,
});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };
