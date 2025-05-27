import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {

            state.value = state.value + 1;
        },
        decrement: (state) => {
            if(state.value > 0 ){
                 state.value = state.value - 1;
            }
           
        },
    }
})

export const { increment , decrement } = counterSlice.actions

export default counterSlice.reducer;