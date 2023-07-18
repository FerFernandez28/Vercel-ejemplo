import React from 'react'
import { useCustomContext } from './ContextManager/ContextProvider'
import {ProductCard} from './components'
import  {CartPage, HomePage} from './screens'
import  {DetailPage} from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <nav>
        <NavLink to='/cart'>Ir al carrito</NavLink>
        <NavLink to='/'>Ir al home</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detail/:id' element={<DetailPage/>} />
        <Route path='/cart'element = {<CartPage/>} />
      </Routes>
    </div>
  )
}

export default App
