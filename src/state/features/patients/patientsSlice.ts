import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPatients, getPatientById } from "../../../services/patientServices"
import { Patient } from "../../../@types"

// Define a type for the slice state
interface PatientState {
    patients: Patient[]
    patient: Patient | null
    loading: boolean
    error: string | null
}

// Define the initial state
const initialState: PatientState = {
    patients: [],
    patient: null,
    loading: false,
    error: null,
}

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // get patients
        builder.addCase(getPatients.pending, state => {
            state.loading = true
        })
        builder.addCase(getPatients.fulfilled, (state, { payload }: PayloadAction<Patient[]>) => {
            state.loading = false
            state.patients = payload
        })
        builder.addCase(getPatients.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // get patient by id
        builder.addCase(getPatientById.pending, state => {
            state.loading = true
        })
        builder.addCase(getPatientById.fulfilled, (state, { payload }: PayloadAction<Patient>) => {
            state.loading = false
            state.patient = payload
        })
        builder.addCase(getPatientById.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
    },
})

export { patientSlice }

export default patientSlice.reducer
