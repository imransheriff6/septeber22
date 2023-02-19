import { createSlice, current } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value:0
  },
  reducers: {
    increment: (state) => {
      console.log(current(state))
      state.value += 1
    },
    decrement: (state) => { 
      state.value -= 1
    }
  },
})

export const { increment, decrement } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer
