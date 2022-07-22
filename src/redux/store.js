/** @format */

import { configureStore } from '@reduxjs/toolkit'
import mapSlice from './slice/mapSlice'
import pizzaSlice from './slice/pizzaSlice'
import cartSlice from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    mapSlice,
    pizzaSlice,
    cartSlice,
  },
})
