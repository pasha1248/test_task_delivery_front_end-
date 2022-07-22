/** @format */

import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CartPage from './page/cartPage/CartPage'
import CuponPage from './page/cuponPage/CuponPage'
import HistoryPage from './page/historyPage/HistoryPage'
import ShopPage from './page/shopPage/ShopPage'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
          {/* <Route path='/cart/burger' element={<CartPage />} /> */}
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/cupo' element={<CuponPage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
