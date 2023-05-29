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
    extraReducers: {
        // get patients count
        [getPatientsCount.pending.type]: state => {
            state.loading = true
        },
        [getPatientsCount.fulfilled.type]: (state, { payload }: PayloadAction<DashboardState["patientsCount"]>) => {
            state.loading = false
            state.patientsCount = payload
        },
        [getPatientsCount.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },

        // get prescriptions count
        [getPrescriptionsCount.pending.type]: state => {
            state.loading = true
        },
        [getPrescriptionsCount.fulfilled.type]: (
            state,
            { payload }: PayloadAction<DashboardState["prescriptionsCount"]>,
        ) => {
            state.loading = false
            state.prescriptionsCount = payload
        },
        [getPrescriptionsCount.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },

        // get products count
        [getProductsCount.pending.type]: state => {
            state.loading = true
        },
        [getProductsCount.fulfilled.type]: (state, { payload }: PayloadAction<DashboardState["productsCount"]>) => {
            state.loading = false
            state.productsCount = payload
        },
        [getProductsCount.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
    },
})

export { dashboardSlice }

export default dashboardSlice.reducer
