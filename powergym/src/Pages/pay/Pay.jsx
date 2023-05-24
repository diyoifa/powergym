import React from 'react'
import Card from '../../UI/Card'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { resetCart} from '../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert'
import './Pay.css'
import payNequiImg from '../../images/pay_nequi.jpg'
import payDaviplataImg from '../../images/pay_daviplata.jpg'
import Header from '../../Components/Header'
//import HeaderImage from '../../images/header_bg_pay2.jpg'
import HeaderImage from '../../images/header_bg_3.jpg'
import { deleteOrder} from '../../redux/apiCalls';

const Pay = () => {

    const user = useSelector(state => state.user); // Acceder al estado de Redux
    const lastOrderId = user.order._id
    console.log("🚀 ~ file: Pay.jsx:19 ~ Pay ~ lastOrderId:", lastOrderId)
    
    const location = useLocation()
    console.log("🚀 ~ file: Pay.jsx:12 ~ Pay ~ location:", location)
    const amount = location.pathname.split("/")[2]
    console.log("🚀 ~ file: Pay.jsx:14 ~ Pay ~ amount:", amount)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClickPaid = (e)=>{
        //evitar evento por default para ejecutar los dispatch para cambiar estados
        e.preventDefault()
        dispatch(resetCart())
        swal("Buen trabajo!", "revisa el estado de tu compra!", "success");
        navigate('/')
        window.scroll({ top: -1800, left: 100, behavior: 'smooth'})
    }

    const handleClickCancel = (e)=>{
        //eliminar la orden del usuario
        e.preventDefault()
        deleteOrder(lastOrderId, dispatch)
        navigate('/cart')
    }

    return (
        <>
            <Header title={"Metodos de pago💳"} image={HeaderImage}>
                1. Abre la aplicacion en tu dispositivo movil ya sea nequi o daviplata <br/>
                2. Una vez dentro selecciona la opción «Pagar con código QR»<br/>
                3. Apunta la cámara de tu dispositivo móvil hacia el código QR correspondiente<br/>
                4. Cuando el código QR sea escaneado, se mostrará el monto a pagar<br/>
                5.Ingresa el total de la compra 🛍️$💵{amount} pesos colombianos<br/>
                6.revisa que todo este bien y realiza el pago🙏
            </Header>
            <section className='container pay-container'>
                <h1>Total a pagar: $💵{amount}</h1>
                <div className="card container pay-wrapper">
                    <Card className="card-pay">
                        <h2>NEQUI</h2>
                        {/* <h2>3114811794</h2>  */}
                        <img src={payNequiImg} alt="" />
                    </Card>
                    <Card className="card-pay">
                        <h2>DAVIPLATA</h2>
                        {/* <h2>3503405655</h2> */}
                            <img src={payDaviplataImg} alt="" />
                    </Card>
                </div>
                <div className='wrapper-btn-pay'>
                        <Link to={"/"}>
                            <button className="btn" onClick={handleClickPaid}>
                                ya pagué
                            </button>
                        </Link>
                        <Link to={"/cart"}>
                            <button className="btn" onClick={handleClickCancel} >
                                Cancelar
                            </button>
                        </Link>
                </div>
            </section>
        </>
  )
}

export default Pay

