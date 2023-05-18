import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        
        <div className="main__header-left">
          <h4>#100DaysWorkout</h4>
          <h1>Únete a las leyendas del mundo del fitness</h1>
          <p>¡Bienvenidos a <span className='main__header-left-desc'>POWER GYM</span>! Somos un pequeño gimnasio de propiedad local que ofrece servicios de entrenamiento personalizado. Nos enorgullece proporcionar un ambiente amigable y motivador para ayudar a nuestros clientes a alcanzar sus objetivos de fitness. </p>
          <Link to={'/plans'} className='btn lg' >Empieza</Link>
        </div>

        <div className="main__header-right">

          <div className="main__header-circle"> 
          
          </div>

            <div className="main__header-image">
              <img src={Image} alt="main__header-IMG" />
            </div>
          
        </div>

      </div>
    </header>
  )
}

export default MainHeader
