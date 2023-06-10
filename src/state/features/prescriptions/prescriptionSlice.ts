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
    extraReducers: builder => {
        // get prescriptions
        builder.addCase(getPrescriptions.pending, state => {
            state.loading = true
        })
        builder.addCase(getPrescriptions.fulfilled, (state, { payload }: PayloadAction<Prescription[]>) => {
            state.loading = false
            state.prescriptions = payload
        })
        builder.addCase(getPrescriptions.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // get prescription by id
        builder.addCase(getPrescriptionById.pending, state => {
            state.loading = true
        })
        builder.addCase(getPrescriptionById.fulfilled, (state, { payload }: PayloadAction<Prescription>) => {
            state.loading = false
            state.prescription = payload
        })
        builder.addCase(getPrescriptionById.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // create prescription
        builder.addCase(createPrescription.pending, state => {
            state.loading = true
        })
        builder.addCase(createPrescription.fulfilled, (state, { payload }: PayloadAction<Prescription>) => {
            state.loading = false
            state.prescriptions.push(payload)
        })
        builder.addCase(createPrescription.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
    },
})

export { prescriptionSlice }

export default prescriptionSlice.reducer
