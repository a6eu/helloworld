import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productsAndQuantities: []
};

const quantityChanger = createSlice({
    name: 'quantityChanger',
    initialState,
    reducers: {
        changer: (state, action) => {
            const productId = action.payload.id;
            state.productsAndQuantities = {
                ...state.productsAndQuantities,
                [productId]: action.payload.quantity
            };
            console.log(state.productsAndQuantities);
        }
    }
});

export const {changer} = quantityChanger.actions;
export default quantityChanger.reducer;