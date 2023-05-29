import { configureStore } from "@reduxjs/toolkit"
import { dashboardSlice } from "./features/dashboard/dashboardSlice"

// store
const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
    },
})

// types
export type RootState = ReturnType<typeof store.getState>

export default store
