import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sendPut=createSlice({
    name:"Put",
    initialState:{
    value:false,
    },
    reducers:{
        putData(state,actions){
            async function sendPut(){
                const response = await axios.put(url,actions.payload,{headers:headers})
                state.value=await response.data
            }
        sendPut()
        }

    }
})
export const {putData}=sendPut.actions
export default sendPut.reducer