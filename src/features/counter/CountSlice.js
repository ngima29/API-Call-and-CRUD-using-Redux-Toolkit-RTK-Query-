import {createSlice} from '@reduxjs/toolkit'
const initialCount={
    count:5,
}

export const counterSlice = createSlice({
    name:"counter",
    initialState:initialCount,
    reducers:{
       incByVal: (state, action)=>{
        state.count += action.payload

        }
    }
})

export const {incByVal} = counterSlice.actions
export default counterSlice.reducer