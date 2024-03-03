import {configureStore, createSlice} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import breadcrumbSlice from "./breadcrumbSlice";

const persistConfig = {
    key: 'bread',
    storage,
};

const changerConfig = {
    key: 'change',
    storage,
};


const persistedReducer = persistReducer(persistConfig, breadcrumbSlice);

export default () => {
    const store = configureStore({
        reducer: {
            breadcrumb: persistedReducer,
        }
    });
    const persistor = persistStore(store);
    return {store, persistor};
};
