import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productsAndQuantities: [{id: 1, quantity: 1}]
};

const quantityChanger = createSlice({
    name: 'quantityChanger',
    initialState,
    reducers: {
        changer: (state, action) => {
            console.log("data", action.payload)
            state.productsAndQuantities = action.payload;
            console.log(state.productsAndQuantities)
        }
    }
});

export const {changer} = quantityChanger.actions;
export default quantityChanger.reducer;