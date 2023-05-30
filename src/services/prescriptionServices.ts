import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

// get prescriptions
const getPrescriptions = createAsyncThunk("prescriptions", async thunkAPI => {
    try {
        const prescriptions = await api.get("/prescriptions")
        return prescriptions.data
    } catch (error) {
        return error
    }
})

// get prescription by id
const getPrescriptionById = createAsyncThunk("prescriptions/id", async (id: string | number, thunkAPI) => {
    try {
        const prescription = await api.get(`/prescriptions/${id}`)
        return prescription.data
    } catch (error) {
        return error
    }
})

// create prescription
const createPrescription = createAsyncThunk("prescriptions/create", async (data: any, thunkAPI) => {
    try {
        const prescription = await api.post("/prescriptions", data)
        return prescription.data
    } catch (error) {
        return error
    }
})

export { getPrescriptions, getPrescriptionById, createPrescription }
