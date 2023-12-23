import { createSlice } from "@reduxjs/toolkit";

const pkSlice=createSlice({
    name:'pk',
    initialState:{
        value:false,
    },
    reducers:{
        setPk:(state,action)=>{
            state.value=action.payload;
        }
}})
export default pkSlice.reducer;
export const {setPk}=pkSlice.actions;