import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>PANEL DE ADMINISTRADOR</h1>
      <Link to='/logout'>
        <button>
            Cerrar sesion
        </button>
      </Link>
    </div>
  )
}

export default Home
