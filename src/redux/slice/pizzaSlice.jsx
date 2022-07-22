/** @format */

/** @format */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../api/Api'

export const fetchPizza = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async params => {
    const { data } = await instance.get('pizza')
    return data
  }
)
export const fetchBurger = createAsyncThunk(
  'burger/fetchPizzasStatus',
  async params => {
    const { data } = await instance.get('burger')
    return data
  }
)
export const fetchChiken = createAsyncThunk(
  'chiken/fetchPizzasStatus',
  async params => {
    const { data } = await instance.get('chicken')
    return data
  }
)

const initialState = {
  items: [],
  status: 'LOADING',
  menu: '',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.status = 'SUCCESS'
      state.items = action.payload
    })
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = 'ERROR'
    })
    builder.addCase(fetchBurger.pending, (state, action) => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchBurger.fulfilled, (state, action) => {
      state.status = 'SUCCESS'
      state.items = action.payload
    })
    builder.addCase(fetchBurger.rejected, (state, action) => {
      state.status = 'ERROR'
    })
    builder.addCase(fetchChiken.pending, (state, action) => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchChiken.fulfilled, (state, action) => {
      state.status = 'SUCCESS'
      state.items = action.payload
    })
    builder.addCase(fetchChiken.rejected, (state, action) => {
      state.status = 'ERROR'
    })
  },
})

export const selectCart = state => state.pizzaSlice

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
