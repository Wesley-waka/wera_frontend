import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recruiterSlice from "../features/recruiters/recruiterSlice";
import jobSlice from "../features/jobs/jobSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  /* app’s top-level reducers */
  recruiter: recruiterSlice,
  job: jobSlice,
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    storage.removeItem('persist:root')
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);