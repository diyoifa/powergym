import React from 'react'
import { PacmanLoader } from 'react-spinners'


const Pacman = () => {
  return (
    // <div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop: "6rem",}}>
          <PacmanLoader color="purple" size={60} />
          <h2 style={{marginTop: "1rem"}}>Cargando...</h2>
        </div>
    // </div>
  )
}

export default Pacman
