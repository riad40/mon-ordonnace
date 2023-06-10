import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

// Patients count
const getPatientsCount = createAsyncThunk("patients/count", async thunkAPI => {
    try {
        // count
        const count = await api.get("/patients/count")

        // count current week
        const countCurrentWeek = await api.get("/patients/count/week")

        // count current month
        const countCurrentMonth = await api.get("/patients/count/month")

        // return patients count
        return {
            total: count.data,
            week: countCurrentWeek.data,
            month: countCurrentMonth.data,
        }
    } catch (error) {
        return error
    }
})

// Prescriptions
const getPrescriptionsCount = createAsyncThunk("prescriptions/count", async thunkAPI => {
    try {
        // count
        const count = await api.get("/prescriptions/count")

        // count current week
        const countCurrentWeek = await api.get("/prescriptions/count/week")

        // count current month
        const countCurrentMonth = await api.get("/prescriptions/count/month")

        return {
            total: count.data,
            week: countCurrentWeek.data,
            month: countCurrentMonth.data,
        }
    } catch (error) {
        return error
    }
})

// get products count
const getProductsCount = createAsyncThunk("products/count", async thunkAPI => {
    try {
        const count = await api.get("/products/count")
        return count.data.count
    } catch (error) {
        return error
    }
})

export { getPatientsCount, getPrescriptionsCount, getProductsCount }
