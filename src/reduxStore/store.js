import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from '../reduxFeatures/ThemeChange/ThemeChangeSlice';
import GetProductsReducer from "../reduxFeatures/GetProducts/GetProductsSlice"
import GoogleAuthReducer from "../reduxFeatures/GoogleAuth/GoogleAuthSlice"

const store = configureStore({
    reducer: {
        changeTheme: ThemeChangeReducer,
        products: GetProductsReducer,
        user: GoogleAuthReducer,
    }
})

export default store;