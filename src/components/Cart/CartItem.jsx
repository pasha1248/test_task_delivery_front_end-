/** @format */

import React from 'react'
import style from './Cart.module.scss'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItem, minuseItem, removeItem } from '../../redux/slice/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <article className={style.item}>
      <div className={style.itemLeft}>
        <img src={item.image} alt='Photo5' height={140} />
      </div>
      <div className={style.pizzaInfo}>
        <h3>{item.title}</h3>
      </div>
      <div className={style.itemCound}>
        <AiFillMinusCircle
          className={style.icon}
          onClick={() => dispatch(minuseItem(item))}
        />
        {item.count}
        <AiFillPlusCircle
          className={style.icon}
          onClick={() => dispatch(addItem(item))}
        />
      </div>
      <div>
        <b style={{ fontSize: '20px' }}>$</b>
        <b>{item.price * item.count}</b>
      </div>
      <AiFillCloseCircle
        className={style.icon}
        onClick={() => dispatch(removeItem(item))}
      />
    </article>
  )
}

export default CartItem
