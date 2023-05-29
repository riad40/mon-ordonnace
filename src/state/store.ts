import { configureStore } from "@reduxjs/toolkit"
import { dashboardSlice } from "./features/dashboard/dashboardSlice"
import { productSlice } from "./features/products/productSlice"

// store
const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
        products: productSlice.reducer,
    },
})

// @types
export type RootState = ReturnType<typeof store.getState>

export default store
