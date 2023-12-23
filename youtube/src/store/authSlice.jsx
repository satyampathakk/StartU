import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth'
    ,   initialState:{
    value:false
    },
    reducers:{
    authenticate:(state,action)=>{
        state.value=action.payload
    }}
});
export const {authenticate}=authSlice.actions;
export default authSlice.reducer