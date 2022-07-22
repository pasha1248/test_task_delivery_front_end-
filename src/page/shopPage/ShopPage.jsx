/** @format */

import React from 'react'
import { useSelector } from 'react-redux'
import ContentShop from '../../components/ContentShop/ContentShop'
import Sidebar from '../../components/Sidebar/Sidebar'
import style from './ShopPage.module.scss'

const ShopPage = () => {
  const { items } = useSelector(store => store.cartSlice)
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Sidebar orders={items} />
      </nav>
      <div className={style.contentShop}>
        <ContentShop />
      </div>
    </div>
  )
}

export default ShopPage
