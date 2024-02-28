import {configureStore, createSlice} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import breadcrumbSlice from "./breadcrumbSlice";
import quantityChanger from "@/slices/changerOfQuantity";

const persistConfig = {
    key: 'bread',
    storage,
};

const changerConfig = {
    key: 'change',
    storage,
};


const persistedReducer = persistReducer(persistConfig, breadcrumbSlice);
const persistReducer1 = persistReducer(changerConfig, quantityChanger);

export default () => {
    const store = configureStore({
        reducer: {
            breadcrumb: persistedReducer,
            quantityReducer: persistReducer1
        }
    });
    const persistor = persistStore(store);
    return {store, persistor};
};
