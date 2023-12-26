import { createSlice } from "@reduxjs/toolkit";

const keySlice=createSlice({
    name:'key',
    initialState:{
        value:false,
    },
    reducers:{
        setKey:(state,action)=>{
            state.value=action.payload
        }
    }
})
export default keySlice.reducer
export const {setKey}=keySlice.actions