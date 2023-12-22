import { createSlice } from "@reduxjs/toolkit";

const videoUrl=createSlice({
    name:'videoUrl',
    initialState:{
        value:'http://127.0.0.1/video/'
    },
    reducers: {
        setVideoUrl:(state, action)=>{
            state.value=`${state.value}${action.payload}`
    }
}})
export const {setVideoUrl} =videoUrl.actions;
export default videoUrl.reducer