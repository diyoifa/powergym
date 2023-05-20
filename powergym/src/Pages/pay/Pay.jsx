import React from 'react'
import Card from '../../UI/Card'
import { Link, useNavigate } from 'react-router-dom'
import { resetCart} from '../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert'
import './Pay.css'
const Pay = () => {

    useSelector(state => state.user); // Acceder al estado de Redux

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClickPaid = (e)=>{
        //evitar evento por default para ejecutar los dispatch para cambiar estados
        e.preventDefault()
        dispatch(resetCart())
        swal("Buen trabajo!", "revisa el estado de tu compra!", "success");
        navigate('/')
    }
  
    return (
    
        <section className='container'>
            <div className="card container pay-wrapper">
                <Card className="card-pay">
                    <h1>Nequi</h1>
                    <h2>3114811794</h2>
                </Card>
                <Card className="card-pay">
                    <h1>Daviplata</h1>
                    <h2>3503405655</h2>
                </Card>
                <div className='wrapper-btn-pay'>
                    <Link to={"/"}>
                        <button className="btn" onClick={handleClickPaid}>
                            ya pagué
                        </button>
                    </Link>
                    <Link to={"/cart"}>
                        <button className="btn">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    
  )
}

export default Pay

