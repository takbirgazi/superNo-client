import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const ProductCartSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeCart: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addCart, removeCart } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;