import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";









const cartInitialState ={
    cartItems : [

    ]
}
export function getCartItems(){
    return async dispatch=>{
        const itemsRefrence = collection(db, 'cartItems');
        const itemsDocs = await getDocs(itemsRefrence)
            const data = [...itemsDocs.docs.map((doc)=>{
                return {...doc.data(), uid : doc.id}
              } )]
              dispatch(cartSlice.actions.SET_CART_ITEMS(data))
           
        
    }
}
export function addItemToCart(payload){
    return async ()=>{
        const itemsRefrence = collection(db, 'cartItems');
        await addDoc(itemsRefrence, {id : payload.id, title : payload.title, price : payload.price, quantity : payload.quantity, total : payload.total, mainPic : payload.mainPic})
       
           
        
    }
}
export function deleteItemFromCart(payload){
    return async ()=>{
        const itemsRefrence = doc(db, 'cartItems', payload);
      
        await deleteDoc(itemsRefrence)
       
           
        
    }
}
export function updateItemFromCart(id, uid, quantity){
    return async (dispatch)=>{
        dispatch(cartSlice.actions.SET_ITEM_QUANTITY({id : id, quantity : quantity}))
        const itemRefrence = doc(db, 'cartItems', uid) 
        await updateDoc(itemRefrence, {quantity : parseInt(quantity)})
       
       
        
    }
}
const cartSlice = createSlice({
    name : 'cart',
    initialState : cartInitialState,
    reducers :{
       
        SET_CART_ITEMS(state, {payload}){
                state.cartItems = [...payload]
              },
        SET_ITEM_QUANTITY(state, {payload}){
            state.cartItems = state.cartItems.map((item)=> item.id == payload.id ? {...item, quantity : payload.quantity} : item )
            
              },

        REMOVE_CART_ITEM(state, {payload}){
            state.cartItems = state.cartItems.filter(item=>{
                return item.id != payload
            })
        }
        }
    }

)

export default cartSlice.reducer
export const cartActions = cartSlice.actions


