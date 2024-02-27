import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import breadcrumbSlice from "./breadcrumbSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const defaultState = {
    key: '',
    quantity: 1,
};

const quantityChanger = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {...state, quantity: state.quantity + 1};
        case 'DECREASE':
            return {...state, quantity: state.quantity - 1};
        default:
            return state;
    }
};

const persistedReducer = persistReducer(persistConfig, breadcrumbSlice);

export default () => {
    const store = configureStore({
        reducer: {
            breadcrumb: persistedReducer,
            quantityChanger
        }
    });
    const persistor = persistStore(store);
    return {store, persistor};
};
