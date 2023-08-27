import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    toggleOpen: state => {
      state.isOpen = !state.isOpen;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, toggleOpen } = cartSlice.actions

export default cartSlice.reducer
