import React, { useState } from 'react'
import './Register.css'
import {register} from '../../redux/apiCalls'
import { useDispatch } from "react-redux";
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
import app from "../../firebase";


const Register = () => {
    // const [inputs, setInputs] = useState({})
    const[username, setUsername] = useState("") 
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const [progres, setProgres] = useState("")

    // const handleChange = (e)=>{
    //     setInputs((prev)=>{
    //         return {...prev,[e.target.name]:e.target.value}
    //     })
    // }

    const handleClick = (e)=>{
        e.preventDefault()
        //validar inputs verificar si el campo  está vacío
        if (!username.trim()) {
            swal("Lo siento!", "debes llenar todas las casillas!🥴", "error")
            return;
          }
        if (!password.trim()) {
            swal("Lo siento!", "debes llenar todas las casillas!🥴", "error")
            return;
        }
        if(!email.trim){
            swal("Lo siento!", "debes llenar todas las casillas!🥴", "error")
            return;
        }

        const fileName = new Date().getTime() + file.name;
        // console.log("🚀 ~ file: Register.jsx:24 ~ handleClick ~ fileName:", fileName)
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setProgres(`Registrando usuario   ${progress.toFixed(2)} % `)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const user = { username, password, email, img: downloadURL};
            register(dispatch, user)
          });
        }
      );


    }

  return (
    <section className='register-container'>
        <div className="card register-wrapper">
            <h1>Registrate</h1>
            <form >
                <input 
                    name='username'
                    type="text" 
                    placeholder='usuario'
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
                <input 
                    name='email'
                    type="email" 
                    placeholder='correo'
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input 
                    name='password'
                    type="password" 
                    placeholder='contraseña'
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <label >Imagen</label>
                <input 
                    name='img'
                    id="file"
                    type="file" 
                    placeholder='contraseña'
                    onChange={(e) =>setFile(e.target.files[0])}
                />
                <button className='btn' onClick={handleClick}>Registrarse</button>
                 {progres}
                <Link to={'/login'} style={{textDecoration: "underline", color:"var(--color-secondary)", fontSize: "bolder", textAlign: "center"}}> Inicia sesion </Link>

            </form>
        </div>
    </section>
  )
}

export default Register
