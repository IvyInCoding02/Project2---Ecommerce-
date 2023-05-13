import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";
import cartReducer  from './cardSlice'; 

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartReducer
    }, 
})

export default store; 