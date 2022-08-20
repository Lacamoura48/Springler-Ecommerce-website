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
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data())
        dispatch(userSlice.actions.SIGN_IN(doc.data()))
        const localData = JSON.stringify({email : email, password : password})
        localStorage.setItem("account",localData)
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   dispatch(userSlice.actions.SET_ERROR())
    console.log(errorMessage)
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
    connectionError : false,
    user : {
        username : '',
        uid : ''
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
        // SET_ERROR(state){
        //     state.connectionError = true
        //     setTimeout(()=>{
        //         state.connectionError = false
        //     }, 2000)
        // },

        SIGN_OUT(state){
            state.connected = false
            state.user = {
                username : '',
                uid : ''
            }
        }
    }
})
export default userSlice.reducer
export const userActions = userSlice.actions