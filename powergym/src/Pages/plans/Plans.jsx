import React from 'react'
import './Plan.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {plans} from '../../data'
import Card from '../../UI/Card'
import { Link, useNavigate } from 'react-router-dom'
const Plans = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header title='Nuestros Planes' image={HeaderImage}>
      Explora nuestra variedad de planes de suscripción y encuentra el ajuste perfecto para tu viaje de fitness. Con una variedad de características y opciones de precios, puedes elegir el plan que satisfaga tus necesidades y presupuesto. Ya seas principiante o un atleta experimentado, tenemos un plan que puede ayudarte a alcanzar tus metas. ¡Únete a nosotros hoy y da el primer paso hacia una vida más saludable y feliz!      </Header>
      <div className="plans">
        <section className="container plans__container">
          {
            plans.map(({id, name, desc, price, features})=> 
              <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1>
                  <h4>Caracteristicas</h4>
                  {
                    features.map(({feature, available}, index)=>
                        <p key={index} className = {!available ? 'disable': 'enable'}>
                            {feature}
                        </p>
                    )
                  }
                  <Link to={`/pay/${price}`}>
                    <button onClick={() => window.scroll({ top: -1800, left: 100, behavior: 'smooth'})}  className='btn lg' >Elegir</button>
                  </Link>
              </Card>
            )
          }
        </section>
      </div>
    </>
  )
}

export default Plans
