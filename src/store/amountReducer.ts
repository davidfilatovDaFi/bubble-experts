import { createSlice } from '@reduxjs/toolkit'

interface initState {
  amount: number
}

const initialState: initState = {
  amount: 0
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    addExpert: (state) => {
      state.amount++
    },
    resetAmount: (state) => {
      state.amount = 0
    }
  },
})

export const { addExpert, resetAmount } = amountSlice.actions

export default amountSlice.reducer