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


export function updateItem(id, uid, loves){
    return async (dispatch)=>{
        dispatch(itemsSlice.actions.SET_ITEM({id : id, loves : loves}))
        const itemRefrence = doc(db, 'items', uid) 
        await updateDoc(itemRefrence, {loves : parseInt(loves)})
       
       
        
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
            state.itemsItems = state.itemsItems.map((item)=> item.id == payload.id ? {...item, loves : payload.loves} : item )
            
              },

       
        }
    }

)

export default itemsSlice.reducer
export const itemsActions = itemsSlice.actions


