import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartShow : false,
    profileShow : false,
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        showCart(state){
            state.cartShow = !state.cartShow
            
        },
        showProfile(state){
            state.profileShow = !state.profileShow
            
        },
    }
})
export default uiSlice.reducer
export const uiActions = uiSlice.actions