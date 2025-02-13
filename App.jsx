import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
 import './App.css'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './LogIn'
import Registration from './Registration'
import ItemCard from './ItemCard'
const App = () => {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/itemCard' element={<ItemCard/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
