// import React, { useEffect} from 'react'
import Home from './Pages/Home/Home'
import Contact from './Pages/contact/Contact'
import NotFound from './Pages/notFound/Notfound'
import Plans from './Pages/plans/Plans'
// import About from './Pages/about/About'
import Footer from './Components/Footer'
import Ejercisios from './Pages/exercises/Ejercisios'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import ExerciseDetail from './Pages/exercises/ExerciseDetail'
import Products from './Pages/products/Products'
import Product from './Pages/product/Product'
import Cart from './Pages/cart/Cart'
import Login from './Pages/login/Login'
import Logout from './Pages/logout/Logout'
import Register from './Pages/register/Register'
import Pay from './Pages/pay/Pay'
import Orders from './Pages/orders/Orders'
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react'

const About = lazy(()=>import('./Pages/about/About'))
// import {resetCartIfNeeded} from './redux/cartRedux'
// import {resetUserIfNeeded} from './redux/userRedux'
const App = () => {
  //resetea los valores del carrito si no hay productos en el
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(resetCartIfNeeded())
  //   dispatch(resetUserIfNeeded())
  // },[dispatch])
  

  const user = useSelector(state => state.user.currentUser)
  console.log("🚀 ~ file: App.jsx:29 ~ App ~ user:", user)
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para controlar el inicio de sesión

  // Función de control para manejar el inicio de sesión desde el componente Login
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // // Verifica si hay un usuario logeado antes de mostrar el contenido principal
  // if (user ===null && isLoggedIn) {
  //   return <Login onLogin={handleLogin}/>;
  // }else{
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element= {<Home/>}/>
            <Route path='about' element= {<Suspense fallback={(<h1>cargnado...</h1>)}> <About/> </Suspense>} />
            <Route path='contact' element= {<Contact/>}/>
            <Route path='plans' element= {user===null? <Login/>:<Plans/>}/>
            <Route path='ejercicios' element= {user===null? <Login/>:<Ejercisios/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>} />
            <Route path='*' element= {<NotFound/>}/>
            <Route path='/products' element= {user===null? <Login/>:<Products/>}/>
            <Route path="/product/:id" element ={<Product/>}/>
            <Route path="/cart" element ={user===null? <Login/>:<Cart/>}/>
            {/* SI NO HAY UN USUARIO LOGEADO */}
            <Route path="/login" element ={user===null?<Login/>:<Home/>}/>
            <Route path="/register" element ={<Register/>}/>
            <Route path="/pay/:amount" element ={<Pay/>}/>
            <Route path="/orders" element ={<Orders/>}/>
            <Route path="/logout" element ={!user?<Home/>:<Logout/>}/>
         </Routes>
         <Footer/>
        </BrowserRouter>
      </div>
    )
  }

//}

export default App
