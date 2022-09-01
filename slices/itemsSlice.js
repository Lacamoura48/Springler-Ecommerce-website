import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";









const itemsInitialState ={
    itemsItems : [

    ]
}
export function getItems(){
    return async dispatch=>{
        const itemsRefrence = collection(db, 'items');
        const itemsDocs = await getDocs(itemsRefrence)
            const data = [...itemsDocs.docs.map((doc)=>{
                return {...doc.data(), uid : doc.id}
              } )]
              dispatch(itemsSlice.actions.SET_STORE_ITEMS(data))
           
        
    }
}


export function addLove(id, uid, lovess){
    return async (dispatch)=>{
        dispatch(itemsSlice.actions.SET_ITEMS({op :1, id : id}))
        const itemRefrence = doc(db, 'items', uid) 
        await updateDoc(itemRefrence, {loves : lovess + 1})
       
       
        
    }
}
export function retrieveLove(id, uid, lovess){
    return async (dispatch)=>{
        dispatch(itemsSlice.actions.SET_ITEMS({op :0, id : id}))
        const itemRefrence = doc(db, 'items', uid) 
        await updateDoc(itemRefrence, {loves : lovess - 1})
       
       
        
    }
}
const itemsSlice = createSlice({
    name : 'items',
    initialState : itemsInitialState,
    reducers :{
       
        SET_STORE_ITEMS(state, {payload}){
                state.itemsItems = [...payload]
              },
        SET_ITEMS(state, {payload}){
            if(payload.op == 1){
                state.itemsItems = state.itemsItems.map((item)=> item.id == payload.id ? {...item, loves : item.loves +1} : item )

            } else if (payload.op == 0) {
                state.itemsItems = state.itemsItems.map((item)=> item.id == payload.id ? {...item, loves : item.loves - 1} : item )

            }
            
              },
        

       
        }
    }

)

export default itemsSlice.reducer
export const itemsActions = itemsSlice.actions


