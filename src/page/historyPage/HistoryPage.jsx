/** @format */

import { Alert, Snackbar, Stack, TextField } from '@mui/material'
import React from 'react'

import style from './History.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyCart } from '../../redux/slice/cartSlice'
import ItemHistory from './ItemHistory'

const HistoryPage = () => {
  const [email, setEmail] = React.useState('')
  const [phone, setProne] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const { orders } = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()

  const MyCart = () => {
    try {
      dispatch(
        fetchMyCart({
          email: email,
          phone: phone,
        })
      )

      setEmail('')
      setProne('')
      setOpen(true)
    } catch (error) {
      alert('Not found!')
    }
  }
  const handleClose = () => {
    setOpen(false)
  }
  console.log(orders)
  return (
    <div className={style.container}>
      <div className={style.inputs}>
        <p>Email</p>
        <TextField value={email} onChange={e => setEmail(e.target.value)} />
        <p>Phone</p>
        <TextField value={phone} onChange={e => setProne(e.target.value)} />
        <span onClick={MyCart}>Send</span>
      </div>
      <div className={style.orders}>
        {!orders.lenght ? (
          orders.map((el, id) => (
            <div key={id} className={style.cart}>
              <div>
                <div>
                  Name: <strong>{el.name}</strong>
                </div>
                <div>Adres: {el.adres}</div>
                <div>Email: {el.email}</div>
              </div>

              <ItemHistory item={el} />
            </div>
          ))
        ) : (
          <div>ORders not found</div>
        )}
      </div>
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

export default HistoryPage
