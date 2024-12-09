import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from '../reduxFeatures/ThemeChange/ThemeChangeSlice';

const store = configureStore({
    reducer: {
        changeTheme: ThemeChangeReducer,
    }
})

export default store;