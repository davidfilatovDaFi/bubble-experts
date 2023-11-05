import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface initState {
  step: string
}

const initialState: initState = {
  step: 'start',
}

export const counterSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<string>) => {
      state.step = action.payload
    }
  },
})

export const { changeStep } = counterSlice.actions

export default counterSlice.reducer