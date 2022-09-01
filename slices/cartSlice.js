import { createSlice } from "@reduxjs/toolkit";










const cartInitialState ={
    cartItems : [

    ]
}


const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers :{
        GET_CART_ITEMS(state){
            if(localStorage.getItem('cart')){
                state.cartItems = [...JSON.parse(localStorage.getItem('cart'))]
            }else {
                
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
            
        },
        ADD_TO_CART(state, {payload}){
            if(state.cartItems.find((item)=> item.id == payload.id)){

            }
            state.cartItems.push(payload)
        },
        
        SET_ITEM_QUANTITY(state, {payload}){
            state.cartItems = state.cartItems.map((item)=> item.id == payload.id ? {...item, quantity : payload.quantity} : item )
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            
              },

        REMOVE_CART_ITEM(state, {payload}){
            state.cartItems = state.cartItems.filter(item=>{
                return item.id != payload
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        }
        }
    }

)

export default cartSlice.reducer
export const cartActions = cartSlice.actions


