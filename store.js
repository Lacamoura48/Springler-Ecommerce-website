import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './slices/cartSlice'
import itemsSlice from "./slices/itemsSlice";
import uiSlice from './slices/uiSlice'
import userSlice from "./slices/userSlice";



const store = configureStore({
    reducer : {
        cart : cartSlice,
        ui : uiSlice,
        user : userSlice,
        items : itemsSlice
    },
    

})


export default store