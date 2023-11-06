import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface initState {
  step: string
}

const initialState: initState = {
  step: 'start',
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<string>) => {
      state.step = action.payload
    }
  },
})

export const { changeStep } = stepSlice.actions

export default stepSlice.reducer