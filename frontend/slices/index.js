import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlice from "./breadcrumbSlice";

export default configureStore({
    reducer: {
        breadcrumb: breadcrumbSlice,
    }

})

