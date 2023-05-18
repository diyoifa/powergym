import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Contact from './Pages/contact/Contact'
import NotFound from './Pages/notFound/Notfound'
import Plans from './Pages/plans/Plans'
import About from './Pages/about/About'
import Footer from './Components/Footer'
import Ejercisios from './Pages/exercises/Ejercisios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ExerciseDetail from './Pages/exercises/ExerciseDetail'
import Products from './Pages/products/Products'
import Product from './Pages/product/Product'
import Cart from './Pages/cart/Cart'
import { useDispatch } from 'react-redux';
import {resetCartIfNeeded} from './redux/cartRedux'
const App = () => {
  //resetea los valores del carrito si no hay productos en el
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(resetCartIfNeeded())
  },[dispatch])

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path='about' element= {<About/>}/>
          <Route path='contact' element= {<Contact/>}/>
          <Route path='plans' element= {<Plans/>}/>
          <Route path='ejercicios' element= {<Ejercisios/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail/>} />
          <Route path='*' element= {<NotFound/>}/>
          <Route path='/products' element= {<Products/>}/>
          <Route path="/product/:id" element ={<Product/>}/>
          <Route path="/cart" element ={<Cart/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
