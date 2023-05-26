import React from 'react'
import './Plan.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {plans} from '../../data'
import Card from '../../UI/Card'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { order } from '../../redux/apiCalls'
// import { Link} from 'react-router-dom'
const Plans = () => {

  const userId = useSelector(state => state.user.currentUser._id)
  // console.log("🚀 ~ file: Plans.jsx:13 ~ Plans ~ userId:", userId)
  const dispatch = useDispatch()
   const navigate = useNavigate()
    //  const [amount, setAmount] = useState()


  const handleClick = (amount)=>{
    // e.preventDefault()
    order({userId, amount}, dispatch)
    navigate(`/pay/${amount}`)
    window.scroll({ top: -1800, left: 100, behavior: 'smooth'})
  }

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
                  {/* <Link to={`/pay/${price}`}> */}
                  <button onClick={() => handleClick(price)} className='btn lg'>Elegir</button>
                  {/* </Link> */}
              </Card>
            )
          }
          {/* <button onClick={handleClick(5000)}  className='btn lg' >Elegir</button>
          <button onClick={handleClick(55000)}  className='btn lg' >Elegir</button> */}
        </section>
      </div>
    </>
  )
}

export default Plans
