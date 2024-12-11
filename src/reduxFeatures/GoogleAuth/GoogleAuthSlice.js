import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}

const GoogleAuth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logInUser: (state, action) => {
            state.user = action.payload;
        },
        logOutUser: (state) => {
            state.user = null;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})


export const { logInUser, logOutUser, setLoading, setError } = GoogleAuth.actions;
export default GoogleAuth.reducer;