import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
    const isDarkInStore = localStorage.getItem("isDark");
    if (!isDarkInStore) {
        localStorage.setItem("isDark", false);
        return false;
    } else {
        if (isDarkInStore == "true") {
            return true;
        } else {
            return false;
        }
    }
}

const ThemeChangeSlice = createSlice({
    initialState,
    name: "changeTheme",
    reducers: {
        theme: (state, action) => {
            state = action.payload;
            localStorage.setItem("isDark", state);
            return state;
        }
    }
});

export default ThemeChangeSlice.reducer;
export const { theme } = ThemeChangeSlice.actions;