import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

// get patients
const getPatients = createAsyncThunk("patients", async thunkAPI => {
    try {
        const patients = await api.get("/patients")
        return patients.data
    } catch (error) {
        return error
    }
})

// get patient by id
const getPatientById = createAsyncThunk("patients/id", async (id: string | number, thunkAPI) => {
    try {
        const patient = await api.get(`/patients/${id}`)
        return patient.data
    } catch (error) {
        return error
    }
})

export { getPatients, getPatientById }
