/** @format */

import React from 'react'
import style from './Sidebar.module.scss'
import { AiOutlineShop } from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'
import { FaHamburger } from 'react-icons/fa'
import { GiChickenLeg } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem } from '../../redux/slice/cartSlice'
import {
  fetchBurger,
  fetchPizza,
  fetchChiken,
} from '../../redux/slice/pizzaSlice'

const Sidebar = ({ orders }) => {
  const { items } = useSelector(state => state.pizzaSlice)

  const dispatch = useDispatch()
  const update = el => {
    dispatch(el(items.data))
  }
  return (
    <div className={style.sidebar}>
      <h3>
        <AiOutlineShop />
        Shops:
      </h3>
      {!orders.length ? (
        <ul>
          <li onClick={() => update(fetchPizza)}>
            <GiFullPizza className={style.icon} on />
            Mc Donny
          </li>
          <li onClick={() => update(fetchChiken)}>
            <GiChickenLeg className={style.icon} />
            CFK
          </li>
          <li onClick={() => update(fetchBurger)}>
            <FaHamburger className={style.icon} />
            BIG Burder
          </li>
        </ul>
      ) : (
        <ul>
          <li style={{ opacity: '0.5' }}>
            <GiFullPizza className={style.iconDis} />
            Mc Donny
          </li>
          <li style={{ opacity: '0.5' }}>
            <GiChickenLeg className={style.iconDis} />
            CFK
          </li>
          <li style={{ opacity: '0.5' }}>
            <FaHamburger className={style.iconDis} />
            BIG Burder
          </li>
        </ul>
      )}

      <span onClick={() => dispatch(clearItem())}>Clear Cart</span>
    </div>
  )
}

export default Sidebar
