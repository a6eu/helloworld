import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: [],
}


const breadcrumbSlice = createSlice( {
    name: 'breadcrumb',
    initialState,
    reducers: {
        upThePath: (state, action) => {state.path.push(action.payload)},
        backThePath: (state) => {state.path.pop()},
        resetPath: (state) => {state.path.length = 0}

    }
})

export const { upThePath, backThePath, resetPath} = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;