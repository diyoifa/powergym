import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../redux/apiCalls'
import './Login.css'
import swal from 'sweetalert'
// import {resetError} from '../../redux/userRedux'
import { Link } from 'react-router-dom'

const Login = () => {
    const[username, setUsername] = useState("") 
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {error} = useSelector(state =>state.user)
    // const [err, setError] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault()
        // console.log("user, pass", username, password)
        //verifica si el campo  está vacío
        if (!username.trim()) {
            swal("Lo siento!", "debes llenar todas las casillas!🥴", "error")
            return;
          }
        if (!password.trim()) {
            swal("Lo siento!", "debes llenar todas las casillas!🥴", "error")
            return;
        }

        login(dispatch, { username, password });
        // !error && swal("Buen trabajo!", "datos correctos!", "success");
      //  if(error){
        //    console.log("🚀 ~ file: Login.jsx:19 ~ handleClick ~ error:", error)
            // setError(error)
         //   dispatch(resetError())
            //swal("Buen trabajo!", "datos correctos!", "success");
            // if(error){
            //     swal("Lo siento!", "datos incorrectos!", "error")
            // }else{
            //     swal("Buen trabajo!", "datos correctos!", "success");
            // }
     //   } //else{
            //swal("Lo siento!", "datos incorrectos!", "error")
        //}
        // if(!err === true){
        //     swal("Lo siento!", "datos incorrectos!", "error")
        // }else{
        //     swal("Buen trabajo!", "datos correctos!", "success")
        // }
        // window.location.reload()
    }
    
    


  return (
    <section className='login-container'>
        <div className="card login-wrapper">
            <h1>Iniciar sesion</h1>
            <form >
                <input 
                    type="text" 
                    placeholder='usuario'  
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required
                />
                <input 
                    type="password" 
                    placeholder='contraseña' 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                />
                <button className='btn' onClick={handleClick}>Ingresar</button>
                {error 
                && <p style={{color: "red", fontSize: "bolder", textAlign: "center"}}>usuario o contraseña <br/> incorrectos</p>
                }
                <Link to={'/register'} style={{textDecoration: "underline", color:"var(--color-secondary)", fontSize: "bolder", textAlign: "center"}}> ¿nuevo usuario? </Link>
            </form>
        </div>
    </section>
  )
}

export default Login
