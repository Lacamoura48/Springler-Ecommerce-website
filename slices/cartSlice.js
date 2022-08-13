import { createSlice } from "@reduxjs/toolkit";

const cartInitialState ={
    cartShow : false,
    cartItems : [
        {id : 1,
        title : "Susie"},
        {id : 1,
        title : "Susie"},
        
    ]
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers :{
        showCart(state){
            state.cartShow = !state.cartShow
            console.log(state.cartShow)
        }
    }

})

export default cartSlice.reducer
export const cartActions = cartSlice.actions