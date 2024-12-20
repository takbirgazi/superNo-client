import { configureStore } from "@reduxjs/toolkit";
import ThemeChangeReducer from '../reduxFeatures/ThemeChange/ThemeChangeSlice';
import GetProductsReducer from "../reduxFeatures/GetProducts/GetProductsSlice";
import GoogleAuthReducer from "../reduxFeatures/GoogleAuth/GoogleAuthSlice";
import ProductCartReducer from '../reduxFeatures/ProductCart/ProductCartSlice';

const store = configureStore({
    reducer: {
        changeTheme: ThemeChangeReducer,
        products: GetProductsReducer,
        user: GoogleAuthReducer,
        cart: ProductCartReducer,
    }
})

export default store;