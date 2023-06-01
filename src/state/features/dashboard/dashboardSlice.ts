import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPatientsCount, getPrescriptionsCount, getProductsCount } from "../../../services/dashboardServices"

// Define a type for the slice state

interface DashboardState {
    patientsCount: {
        total: number
        week: number
        month: number
    }
    prescriptionsCount: {
        total: number
        week: number
        month: number
    }
    productsCount: { total: number }
    loading: boolean
    error: string | null
}

// Define the initial state using that type

const initialState: DashboardState = {
    patientsCount: {
        total: 0,
        week: 0,
        month: 0,
    },
    prescriptionsCount: {
        total: 0,
        week: 0,
        month: 0,
    },
    productsCount: { total: 0 },
    loading: false,
    error: null,
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // get patients count
        builder.addCase(getPatientsCount.pending, state => {
            state.loading = true
        })
        builder.addCase(getPatientsCount.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.patientsCount = action.payload
        })
        builder.addCase(getPatientsCount.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
        // get prescriptions count
        builder.addCase(getPrescriptionsCount.pending, state => {
            state.loading = true
        })
        builder.addCase(getPrescriptionsCount.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.prescriptionsCount = action.payload
        })
        builder.addCase(getPrescriptionsCount.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
        // get products count
        builder.addCase(getProductsCount.pending, state => {
            state.loading = true
        })
        builder.addCase(getProductsCount.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.productsCount = action.payload
        })
        builder.addCase(getProductsCount.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        })
    },
})

export { dashboardSlice }

export default dashboardSlice.reducer
