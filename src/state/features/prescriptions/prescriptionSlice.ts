import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPrescriptions, getPrescriptionById, createPrescription } from "../../../services/prescriptionServices"
import { Prescription } from "../../../@types"

// Define a type for the slice state
interface PrescriptionState {
    prescriptions: Prescription[]
    prescription: Prescription | null
    loading: boolean
    error: string | null
}

// Define the initial state
const initialState: PrescriptionState = {
    prescriptions: [],
    prescription: null,
    loading: false,
    error: null,
}

const prescriptionSlice = createSlice({
    name: "prescription",
    initialState,
    reducers: {},
    extraReducers: {
        // get prescriptions
        [getPrescriptions.pending.type]: state => {
            state.loading = true
        },
        [getPrescriptions.fulfilled.type]: (state, { payload }: PayloadAction<Prescription[]>) => {
            state.loading = false
            state.prescriptions = payload
        },
        [getPrescriptions.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
        // get prescription by id
        [getPrescriptionById.pending.type]: state => {
            state.loading = true
        },
        [getPrescriptionById.fulfilled.type]: (state, { payload }: PayloadAction<Prescription>) => {
            state.loading = false
            state.prescription = payload
        },
        [getPrescriptionById.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
        // create prescription
        [createPrescription.pending.type]: state => {
            state.loading = true
        },
        [createPrescription.fulfilled.type]: (state, { payload }: PayloadAction<Prescription>) => {
            state.loading = false
            state.prescriptions.push(payload)
        },
        [createPrescription.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
    },
})

export { prescriptionSlice }

export default prescriptionSlice.reducer
