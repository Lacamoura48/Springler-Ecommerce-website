import { createSlice } from "@reduxjs/toolkit";

const cartInitialState ={
    cartShow : false,
    profileShow : false,
    cartItems : [
        {id : 1,
        title : "Susie"},
        {id : 2,
        title : "9lwa"},
        {id : 3,
        title : "Susie"},
        
        
        
    ]
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers :{
        showCart(state){
            state.cartShow = !state.cartShow
          
        },
        showProfile(state){
            state.profileShow = !state.profileShow
            
        }
    }

})

export default cartSlice.reducer
export const cartActions = cartSlice.actions