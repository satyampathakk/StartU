import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'
const sendGet=createSlice({
    name:"GET",
    initialState:{
        value:false,
    },
    reducers:{
        getData(state,action){
            async function req(){
                const response=await axios.get(url)
                state.value=await response.data
            }
            req()
        }
    }
})