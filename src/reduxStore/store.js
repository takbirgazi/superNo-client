import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeSlice from '../reduxFeatures/ThemeChange/ThemeChangeSlice';

const store = configureStore({
    reducer: {
        changeTheme: ThemeChangeSlice,
    }
})

export default store;