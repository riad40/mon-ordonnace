import { configureStore } from "@reduxjs/toolkit"
import { dashboardSlice } from "./features/dashboard/dashboardSlice"
import { productSlice } from "./features/products/productSlice"
import { patientSlice } from "./features/patients/patientsSlice"
import { prescriptionSlice } from "./features/prescriptions/prescriptionSlice"
import { profileSlice } from "./features/profile/profileSlice"

// store
const store = configureStore({
    reducer: {
        dashboard: dashboardSlice.reducer,
        products: productSlice.reducer,
        patients: patientSlice.reducer,
        prescriptions: prescriptionSlice.reducer,
        profile: profileSlice.reducer,
    },
})

// @types
export type RootState = ReturnType<typeof store.getState>

export default store
