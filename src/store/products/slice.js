import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
