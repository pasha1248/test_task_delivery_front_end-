/** @format */

import React from 'react'
import style from './ContentShop.module.scss'
import FoodItem from './FoodItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizza } from '../../redux/slice/pizzaSlice'
import MyLoader from './FoodItemSkeleton'

const ContentShop = () => {
  const dispatch = useDispatch()
  const { items, status } = useSelector(state => state.pizzaSlice)

  React.useEffect(() => {
    dispatch(fetchPizza(items.data))
  }, [items.data, dispatch])

  console.log(items, status)
  return (
    <div className={style.content}>
      {status === 'LOADING'
        ? [...new Array(6)].map((_, id) => <MyLoader key={id} />)
        : items.map(el => <FoodItem item={el} />)}
    </div>
  )
}

export default ContentShop
