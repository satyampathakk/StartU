import { createSlice } from "@reduxjs/toolkit";

const urlSlice=createSlice(
    {
        name:'url',
        initialState:{
            value:'http://127.0.0.1/'
        },
        reducers:{
            setUrl:(state,action)=>{
                let tem =state.value
                state.value=`${tem}/${action.payload}`
            }

        }
    }
)
export const {setUrl}=urlSlice.actions
export default urlSlice.reducer