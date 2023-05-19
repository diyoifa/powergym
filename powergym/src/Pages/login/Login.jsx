import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../redux/apiCalls'
import './Login.css'
import swal from 'sweetalert'
import {resetError} from '../../redux/userRedux'
const Login = () => {
    const[username, setUsername] = useState("") 
    const[password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {error} = useSelector(state =>state.user)
    const [err, setError] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault()
        // console.log("user, pass", username, password)
        login(dispatch, { username, password });
        // !error && swal("Buen trabajo!", "datos correctos!", "success");
        if(error){
            console.log("🚀 ~ file: Login.jsx:19 ~ handleClick ~ error:", error)
            setError(error)
            dispatch(resetError())
            //swal("Buen trabajo!", "datos correctos!", "success");
            // if(error){
            //     swal("Lo siento!", "datos incorrectos!", "error")
            // }else{
            //     swal("Buen trabajo!", "datos correctos!", "success");
            // }
        } //else{
            //swal("Lo siento!", "datos incorrectos!", "error")
        //}
        // if(!err === true){
        //     swal("Lo siento!", "datos incorrectos!", "error")
        // }else{
        //     swal("Buen trabajo!", "datos correctos!", "success")
        // }
    }
    

  return (
    <section className='login-container'>
        <div className="card login-wrapper">
            <h1>Iniciar sesion</h1>
            <form >
                <input type="text" placeholder='usuario' onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder='contraseña' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className='btn' onClick={handleClick}>Ingresar</button>
                   
            </form>
        </div>
    </section>
  )
}

export default Login
