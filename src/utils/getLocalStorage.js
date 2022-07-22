/** @format */

export const getBasketFromLocalStorage = () => {
  const data = window.localStorage.getItem('basket')

  return data ? JSON.parse(data) : []
}

export const getTotalFromLocalStorage = () => {
  const data = window.localStorage.getItem('total')

  return data ? JSON.parse(data) : 0
}
