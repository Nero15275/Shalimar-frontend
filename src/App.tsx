import React from 'react'
import './App.scss'
import Cart from './pages/cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/nabbar/Navbar'
import OfferComponent from './pages/offer/OfferComponent'
import AddressComponent from './pages/address/AddressComponent'
import OrderSuccessCComponent from './pages/ordersuccess/OrderSuccessCComponent'
const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="offer" element={<OfferComponent />} />
        <Route path="address" element={<AddressComponent />} />
        <Route path="ordersuccess" element={<OrderSuccessCComponent />} />
      </Routes>
    </div>
  )
}

export default App
