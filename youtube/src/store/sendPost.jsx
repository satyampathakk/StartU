import { createSlice } from "@reduxjs/toolkit";

const sendPost=createSlice({
    name:'POST',
    initialState:{
        value:false,
    },
    reducers:{
        PostData(state,actions){
            async function sendP(){
                const response = await axios.post(url,data=actions.payload,{headers:header})
                state.value=await response.data
            }
            sendP();
    },
}})
export default sendPost.reducer;
export const {PostData}=sendPost.actions