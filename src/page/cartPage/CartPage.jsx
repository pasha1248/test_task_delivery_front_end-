/** @format */

import React from 'react'
import style from './CartPage.module.scss'
import InputInfo from './InputInfo'
import Cart from '../../components/Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../redux/slice/cartSlice'
import { Alert, Snackbar, Stack } from '@mui/material'

export const Context = React.createContext(null)

const CartPage = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(state => state.cartSlice)
  const [adres, setAdres] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [name, setName] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const submitOrderClick = () => {
    dispatch(
      fetchCart({
        name: name,
        email: email,

        phone: phone,
        adres: adres,
        totalaSum: totalPrice,
        order: items,
      })
    )
    setEmail('')
    setPhone('')
    setName('')
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={style.cart}>
      <Context.Provider
        value={{
          adres,
          setAdres,
          email,
          setEmail,
          phone,
          setPhone,
          name,
          setName,
        }}
      >
        <acticle>
          <InputInfo />
        </acticle>
        <acticle>
          <Cart submitOrderClick={submitOrderClick} />
        </acticle>
      </Context.Provider>
      <Stack spacing={4} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert severity='success' sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}

export default CartPage
