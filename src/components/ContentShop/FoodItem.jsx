/** @format */

import React from 'react'
import style from './ContentShop.module.scss'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice'

const FoodItem = ({ item }) => {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cartSlice)
  console.log(items)
  return (
    <article className={style.item}>
      <img src={item.image} alt='Pizza' />
      <div className={style.itemText}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className={`${style.itemPrice}`}>
          <span>
            Price :
            <strong>
              <span>$</span> {item.price}
            </strong>
          </span>
          <AiFillPlusCircle
            className={style.icon}
            onClick={() => dispatch(addItem(item))}
          />
        </div>
      </div>
    </article>
  )
}

export default FoodItem
