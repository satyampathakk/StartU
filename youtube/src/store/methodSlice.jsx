import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
const methodSlice=createSlice({
    name:'method',
    initialState:{
        getData:false,
        postData:false,
        putData:false,
        deleteData:false

    }
    , reducers:{
        //get data
        getDataStart:(state,action)=>{
            state.getData=action.payload
            },
        postDataStart:(state,action)=>{
                state.getData=action.payload
                },
        putDataStart:(state,action)=>{
                    state.getData=action.payload
                    },
        deleteDataStart:(state,action)=>{
                        state.getData=action.payload
                        },
        }})
export const {getDataStart,postDataStart,putDataStart,deleteDataStart} =methodSlice.actions;
export default methodSlice.reducer;