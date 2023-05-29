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
    extraReducers: {
        // get patients
        [getPatients.pending.type]: state => {
            state.loading = true
        },
        [getPatients.fulfilled.type]: (state, { payload }: PayloadAction<Patient[]>) => {
            state.loading = false
            state.patients = payload
        },
        [getPatients.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
        // get patient by id
        [getPatientById.pending.type]: state => {
            state.loading = true
        },
        [getPatientById.fulfilled.type]: (state, { payload }: PayloadAction<Patient>) => {
            state.loading = false
            state.patient = payload
        },
        [getPatientById.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
    },
})

export { patientSlice }

export default patientSlice.reducer
