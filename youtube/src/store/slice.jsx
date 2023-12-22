import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    sub:(state)=>{
        state.value-=1
    }
  },
});

export const { add,sub } = slice.actions;
export default slice.reducer;
