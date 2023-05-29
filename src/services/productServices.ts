import api from "../configs/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

// get products
const getProducts = createAsyncThunk("products", async thunkAPI => {
    try {
        const products = await api.get("/products")
        return products.data
    } catch (error) {
        return error
    }
})

// get product by id
const getProductById = createAsyncThunk("products/id", async (id: string | number, thunkAPI) => {
    try {
        const product = await api.get(`/products/${id}`)
        return product.data
    } catch (error) {
        return error
    }
})

export { getProducts, getProductById }
