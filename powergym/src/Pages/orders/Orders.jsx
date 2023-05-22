import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure
} from '../../redux/userRedux'
import { privateRequest } from '../../requestMethods'
import Card from '../../UI/Card'
import './Orders.css'


const Orders = () => {

    const user = useSelector(state => state.user.currentUser) //nos conectamos al estado
    const userId = user._id
    console.log("🚀 ~ file: Orders.jsx:14 ~ Orders ~ userId:", userId)
    const dispatch = useDispatch()
    const [orders, setOrders] = useState([])

    //FUNCIONES
    const convertirFechaHora = (createdAt) => {
        const fechaHora = new Date(createdAt);
        const opciones = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        };
        return fechaHora.toLocaleString(undefined, opciones);
    }

    useEffect(()=>{
        const getOrders = async(dispatch)=>{
              dispatch(getOrderStart())
              try {
                const res = await privateRequest.get(`/orders/${userId}`)
                console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ res:", res)
                setOrders(res.data)
                dispatch(getOrderSuccess())
              } catch (error) {
                console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ error:", error)
                dispatch(getOrderFailure())
              }
        }
        getOrders(dispatch)
    },[userId, dispatch])

    // console.log(orders[0]._id)
  return (
    <>

        <section className='container'>
                <h1>Tus Compras🛍️</h1>

                <div className="container orders-container" >
                    {
                        orders.map((order)=>
                            // const {amount, createdAt, products, status, _id} = order
                            <Card className = "orders-card" key={order.crea
                            }>
                                <h4>ID: {order._id}</h4>
                                <h4>Fecha: {convertirFechaHora(order.createdAt)}</h4>
                                <h4>Productos</h4>
                                {
                                    order.products?.map((product)=>(
                                        <Card className="orders-card__products">
                                            <h5>Nombre: 🛍️{product.title}</h5>
                                            <h5>Cantidad: #️⃣{product.quantity}</h5>
                                            <br></br>
                                        </Card>
                                    ))
                                }
                                <h4>Estado: {order.status}</h4>
                            </Card>
                        )
                    }
                </div>
        </section>
      
    </>
  )
}

export default Orders
