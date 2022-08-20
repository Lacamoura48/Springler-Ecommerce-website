import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './slices/cartSlice'
import uiSlice from './slices/uiSlice'
import userSlice from "./slices/userSlice";



const store = configureStore({
    reducer : {
        cart : cartSlice,
        ui : uiSlice,
        user : userSlice
    },
    

})


export default store