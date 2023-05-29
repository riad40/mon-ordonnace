import { configureStore } from "@reduxjs/toolkit"
import { dashboardSlice } from "./features/dashboard/dashboardSlice"
import { productSlice } from "./features/products/productSlice"
import { patientSlice } from "./features/patients/patientsSlice"

// store
const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
        products: productSlice.reducer,
        patients: patientSlice.reducer,
    },
})

// @types
export type RootState = ReturnType<typeof store.getState>

export default store
