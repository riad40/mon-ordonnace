import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Prescription } from "../@types"

// get prescriptions
const getPrescriptions = createAsyncThunk("prescriptions", async thunkAPI => {
    try {
        const prescriptions = await api.get("/prescriptions")
        const randomStatus = () => {
            const status = ["Enregistrée", "Brouillon"]
            const imgs = [
                "https://live.staticflickr.com/65535/52942187932_bc36f4fdde_s.jpg",
                "https://live.staticflickr.com/65535/52942187937_cdbf4cd4aa_s.jpg",
                "https://live.staticflickr.com/65535/52942937409_153fb77735_s.jpg",
                "https://live.staticflickr.com/65535/52943250268_03be6c6d7e_s.jpg",
            ]
            const randomStatus = Math.floor(Math.random() * status.length)
            const randomImg = Math.floor(Math.random() * imgs.length)
            return {
                status: status[randomStatus],
                img: imgs[randomImg],
            }
        }

        prescriptions.data?.map((prescription: Prescription) => {
            prescription.status = randomStatus().status as "Enregistrée" | "Brouillon"
            prescription.avatar = randomStatus().img
        })

        return prescriptions.data.sort((a: Prescription, b: Prescription) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        })
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
