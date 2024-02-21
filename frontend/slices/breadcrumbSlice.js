'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: [],
}


const breadcrumbSlice = createSlice( {
    name: 'breadcrumb',
    initialState,
    reducers: {
        setPath: (state, action) => {state.path = action.payload},

    }
})

export const { setPath} = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;