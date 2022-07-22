/** @format */

import React from 'react'

const ItemHistory = ({ item }) => {
  return (
    <div>
      {item.order.map(el => (
        <>
          <div>title: {el.title}</div>
          <div>count: {el.count}</div>
          <div>price: {el.price}</div>
          <hr />
        </>
      ))}
    </div>
  )
}

export default ItemHistory
