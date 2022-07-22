/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../api/Api'
import {
  getTotalFromLocalStorage,
  getBasketFromLocalStorage,
} from '../../utils/getLocalStorage'

export const fetchCart = createAsyncThunk(
  'cart/fetchPizzasStatus',
  async params => {
    await instance.post('order', params)
  }
)
export const fetchMyCart = createAsyncThunk(
  'cartMy/fetchMyPizzasStatus',
  async params => {
    const { data } = await instance.post('order/my', params)
    return data
  }
)

const initialState = {
  totalPrice: getTotalFromLocalStorage(),
  items: getBasketFromLocalStorage(),
  orders: [],
  status: 'LOADING',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj._id === action.payload._id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Number(obj.price * obj.count) + sum
      }, 0)
    },
    minuseItem(state, action) {
      const findItem = state.items.find(obj => obj._id === action.payload._id)

      if (findItem.count < 2) {
        state.items = state.items.filter(obj => obj._id !== action.payload._id)
      }

      if (findItem) {
        findItem.count--
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Number(obj.price * obj.count) + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj._id !== action.payload._id)
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Number(obj.price * obj.count) + sum
      }, 0)
    },
    clearItem(state) {
      state.items = []
      state.totalPrice = 0
      state.totalPrice = state.items.reduce((sum, obj) => {
        return Number(obj.price * obj.count) + sum
      }, 0)
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCart.pending, (state, action) => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.status = 'SUCCESS'
      state.items = []
      state.totalPrice = 0
    })
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.status = 'ERROR'
    })
    builder.addCase(fetchMyCart.pending, (state, action) => {
      state.status = 'LOADING'
    })
    builder.addCase(fetchMyCart.fulfilled, (state, action) => {
      state.status = 'SUCCESS'
      state.orders = action.payload
    })
    builder.addCase(fetchMyCart.rejected, (state, action) => {
      state.status = 'ERROR'
    })
  },
})

export const { addItem, removeItem, clearItem, minuseItem } = cartSlice.actions

export default cartSlice.reducer
