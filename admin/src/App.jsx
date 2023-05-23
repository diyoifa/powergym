import React from 'react'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/home/Home'

const App = () => {
  const admin = useSelector(state => state.user.currentUser)
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element ={admin===null?<Login/>:<Home/>}/>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/' element={admin===null?<Login/>:<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
