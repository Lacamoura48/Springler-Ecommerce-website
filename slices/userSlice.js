import { createSlice } from "@reduxjs/toolkit";
import {signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  collection, query, where, getDocs} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import cartSlice from "./cartSlice";



export function signIn(email, password){
   return async (dispatch)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then( async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const userInfos = await getDocs(q)
      userInfos.forEach((doc) => {
       
        dispatch(userSlice.actions.SIGN_IN({...doc.data(),docId : doc.id}))

        const localData = JSON.stringify({email : email, password : password})
        localStorage.setItem("account",localData)
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(userSlice.actions.SET_ERROR(errorCode))
   
    });
  
    }
}
export function signthisOut(){
    return (dispatch)=>{
        signOut(auth).then(() => {
            dispatch(userSlice.actions.SIGN_OUT())
          }).catch((error) => {
            // An error happened.
          });
        
    }
}




const initialState = {
    connected : false,
    connectionNote : false,
    connectionError : '',
    user : {
        username : '',
        uid : '',
        wishlist : []
    }
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        SIGN_IN(state, {payload}){
            state.connected = true
            state.connectionNote = true
            state.user = {...payload}
            
        },
        SET_ERROR(state, {payload}){
            state.connectionError = payload
            
        },

        SIGN_OUT(state){
            state.connected = false
            state.user = {
                username : '',
                uid : ''
            }
        },
        ADD_TO_WISH(state, {payload}){
            if(state.user.wishlist.find((item)=> parseInt(item) == payload)){
                state.user.wishlist =  state.user.wishlist.filter((item)=> parseInt(item) != payload)
            }else {
                state.user.wishlist.push(payload)

            }
        }
    }
})
export default userSlice.reducer
export const userActions = userSlice.actions