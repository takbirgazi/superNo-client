import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: (() => {
        const data = localStorage.getItem('cart');

        if (!data) {
            localStorage.setItem('cart', []);
            return [];
        } else {
            return data;
        }
    })()
}

const ProductCartSlice = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const data = [...state.items, action.payload]
            localStorage.setItem('cart', JSON.stringify(data));
            state.items.push(action.payload);
        },
        removeCart: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const { addCart, removeCart } = ProductCartSlice.actions;
export default ProductCartSlice.reducer;