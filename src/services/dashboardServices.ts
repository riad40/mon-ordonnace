import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

/** ============================ Patients Resource ============================ */

// Get patients count
const getPatientsCount = createAsyncThunk("patients/count", async thunkAPI => {
    try {
        // get patients count
        const count = await api.get("/patients/count")

        // get patients count current week
        const countCurrentWeek = await api.get("/patients/count/week")

        // get patients count current month
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

// get prescriptions count
const getPrescriptionsCount = createAsyncThunk("prescriptions/count", async thunkAPI => {
    try {
        // get prescriptions count
        const count = await api.get("/prescriptions/count")

        // get prescriptions count current week
        const countCurrentWeek = await api.get("/prescriptions/count/week")

        // get prescriptions count current month
        const countCurrentMonth = await api.get("/prescriptions/count/month")

        // return prescriptions count
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
        return count.data
    } catch (error) {
        return error
    }
})

export { getPatientsCount, getPrescriptionsCount, getProductsCount }
