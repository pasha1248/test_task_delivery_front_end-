/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import style from './Cart.module.scss'
import CartItem from './CartItem'
import { BsCartXFill } from 'react-icons/bs'
import 'macro-css'

const Cart = ({ submitOrderClick }) => {
  //
  //
  const { items, totalPrice } = useSelector(state => state.cartSlice)
  //
  const isMounted = React.useRef(false)

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      const json1 = JSON.stringify(totalPrice)

      window.localStorage.setItem('basket', json)
      window.localStorage.setItem('total', json1)
    }
    isMounted.current = true
  }, [items, totalPrice])
  //
  console.log(items)
  return (
    <div className={style.container}>
      {items.length === 0 ? (
        <div className='d-flex align-center justify-center flex-column'>
          <BsCartXFill style={{ color: '826ADC', fontSize: '300px' }} />
          <div style={{ fontSize: '40px', color: '826ADC', marginTop: '20px' }}>
            Cart is ClEAr
          </div>
        </div>
      ) : (
        <>
          <div className={style.items}>
            {items.map(item => (
              <CartItem item={item} />
            ))}
          </div>
          <div className={style.submit}>
            <h3>total price ={totalPrice}</h3>{' '}
            <span onClick={submitOrderClick}>Submit</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
