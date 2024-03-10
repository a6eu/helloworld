import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import breadcrumbSlice from "./breadcrumbSlice";
import favouriteSlice from "./favSlice"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["breadcrumb", "favorite"], 
};

const rootReducer = combineReducers({
  breadcrumb: breadcrumbSlice,
  favorite: favouriteSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
