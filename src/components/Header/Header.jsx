/** @format */

import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cartSlice)
  return (
    <header className={style.header}>
      <div className={style.item} style={{ marginLeft: '100px' }}>
        <h3>
          <Link to='/'>
            <GrHomeRounded style={{ marginRight: '10px' }} />
            Shop
          </Link>
        </h3>
      </div>

      <div className={style.item}>
        <h3>
          <Link to='/cart' disablet>
            <RiShoppingCartLine style={{ marginRight: '10px' }} />
            <span>{items.length}</span>
            Shoping Cart
          </Link>
        </h3>
      </div>
      <div className={style.item}>
        <h3>
          <Link to='/history'>
            <RiShoppingCartLine style={{ marginRight: '10px' }} />
            History
          </Link>
        </h3>
      </div>
      <div className={style.item}>
        <h3>
          <Link to='/cupo'>
            <RiShoppingCartLine style={{ marginRight: '10px' }} />
            Coupons
          </Link>
        </h3>
      </div>
      <div className={style.total}>$ {totalPrice}</div>
    </header>
  )
}

export default Header
