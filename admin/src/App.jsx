import React from 'react'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";
import UsersList from "./pages/userList/UserList"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"

import './index.css'

const App = () => {
  const admin = useSelector(state => state.user.currentUser)
  return (
    <>
    <BrowserRouter>
      <Topbar/>
      {
        admin === null
        ?(<Login/>)
        :(
          
        <div className="container">
          {<Sidebar/>}
          <Routes>
            <Route path="/login" element ={<Home/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/userlist' element={<UsersList/>}/>
            <Route path='/user/:id' element={<User/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/productlist' element={<ProductList/>}/>
          </Routes>
        </div>)
      }
      
      

    {/* <Routes>
      <Route path="/login">
        <Login/>
      </Route>
      {
        admin && (
          <>
            <Topbar/>
            <div className="container">
              <Sidebar/>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/logout">
                <Logout/>
              </Route>
            </div>
          </>
        )
      }
    </Routes> */}

    </BrowserRouter>
    </>
  )
}

export default App
