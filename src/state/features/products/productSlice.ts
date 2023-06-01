import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getProducts, getProductById } from "../../../services/productServices"
import { Product } from "../../../@types"

// Define a type for the slice state
interface ProductState {
    products: Product[]
    product: Product | null
    loading: boolean
    error: string | null
}

// Define the initial state
const initialState: ProductState = {
    products: [],
    product: null,
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        // get products
        builder.addCase(getProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, { payload }: PayloadAction<Product[]>) => {
            state.loading = false
            state.products = payload
        })
        builder.addCase(getProducts.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
        // get product by id
        builder.addCase(getProductById.pending, state => {
            state.loading = true
        })
        builder.addCase(getProductById.fulfilled, (state, { payload }: PayloadAction<Product>) => {
            state.loading = false
            state.product = payload
        })
        builder.addCase(getProductById.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })
    },
})

export { productSlice }

export default productSlice.reducer
