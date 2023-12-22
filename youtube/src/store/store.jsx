import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slice'
const rootReducer=combineReducers({
    counter:counterReducer,
})

const store = configureStore({
    reducer: rootReducer
});
export default store;