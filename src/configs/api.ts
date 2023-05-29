import axios, { AxiosInstance } from "axios"

const API_BASE_URL = "https://starter-express-api-production-d9f5.up.railway.app/api"

// Create axios instance
const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api
