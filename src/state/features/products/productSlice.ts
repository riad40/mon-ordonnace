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
    extraReducers: {
        // get products
        [getProducts.pending.type]: state => {
            state.loading = true
        },
        [getProducts.fulfilled.type]: (state, { payload }: PayloadAction<Product[]>) => {
            state.loading = false
            state.products = payload
        },
        [getProducts.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
        // get product by id
        [getProductById.pending.type]: state => {
            state.loading = true
        },
        [getProductById.fulfilled.type]: (state, { payload }: PayloadAction<Product>) => {
            state.loading = false
            state.product = payload
        },
        [getProductById.rejected.type]: (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        },
    },
})

export { productSlice }

export default productSlice.reducer
