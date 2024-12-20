import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk("products/fetchProductsData", async () => {
    const allProducts = await fetch(`${import.meta.env.VITE_base_api}/products`)
        .then((res) => res.json())
        .then((data) => data);
    return allProducts;
})

const initialState = {
    isLoading: false,
    isError: null,
    products: [],
}

const GetProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductsData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;

        });
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.products = action.payload;
        });
    }
});


export default GetProductsSlice.reducer;