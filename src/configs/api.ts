import axios, { AxiosInstance } from "axios"
import API_URL from "./API_URL"

const API_BASE_URL = `${API_URL}api/`

// Create axios instance
const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api
