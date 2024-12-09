import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from '../reduxFeatures/ThemeChange/ThemeChangeSlice';
import GetProductsReducer from "../reduxFeatures/GetProducts/GetProductsSlice"

const store = configureStore({
    reducer: {
        changeTheme: ThemeChangeReducer,
        products: GetProductsReducer,
    }
})

export default store;