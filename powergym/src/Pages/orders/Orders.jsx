import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
} from "../../redux/userRedux";
import { privateRequest } from "../../requestMethods";
import Card from "../../UI/Card";
import "./Orders.css";
import Pacman from "../../Components/PacmanLoader";
import Header from "../../Components/Header"
import headerImage from "../../images/header_bg_9.jpg"
// import { Pagination } from '@mui/material';
import Paginacíon from "../../Components/Paginacíon";

const Orders = () => {
  const user = useSelector((state) => state.user.currentUser); //nos conectamos al estado
  const userId = user._id;
  console.log("🚀 ~ file: Orders.jsx:14 ~ Orders ~ userId:", userId);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  //PAGINACION
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 3
  const indexOfLastOrder = currentPage * ordersPerPage
  const indexOfFirtOrder = indexOfLastOrder - ordersPerPage
  const currentOrders = orders.slice(indexOfFirtOrder, indexOfLastOrder)


  //FUNCIONES
  const paginate = (event, value) => {
    //ACTUALIZARÁ EL VALOR DE LA PAGINA ACTUAL
    setCurrentPage(value);
    // window.scrollTo({ top: 1800, behavior: 'smooth' });
  }
  const convertirFechaHora = (createdAt) => {
    const fechaHora = new Date(createdAt);
    const opciones = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return fechaHora.toLocaleString(undefined, opciones);
  };
  //obtener ordenes
  useEffect(() => {
    setLoading(true);
    const getOrders = async (dispatch) => {
      dispatch(getOrdersStart());
      try {
        const res = await privateRequest.get(`/orders/${userId}`);
        console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ res:", res);
        setOrders(res?.data);
        dispatch(getOrdersSuccess(res.data));
        setLoading(false);
      } catch (error) {
        console.log("🚀 ~ file: apiCalls.js:95 ~ getOrders ~ error:", error);
        dispatch(getOrdersFailure());
      }
    };
    getOrders(dispatch);
  }, [userId, dispatch]);

  // console.log(orders[0]._id)
  return (
    <>
        <Header title={"Tus Compras🛍️"} image={headerImage}>
          ¡Bienvenido a la sección de compras! Aquí podrás realizar un seguimiento de todas tus compras y conocer su estado actual. Navega de manera sencilla a través de tu historial de pedidos, desde la confirmación de la compra hasta la entrega.
        </Header>

      {loading ? (
        <Pacman/>
      ) : (
          <section className="order-container">
            {/* <h1>Tus Compras</h1> */}
            <div className="container orders-container">
              {
                orders.length > 0? currentOrders.map((order) => (
                // const {amount, createdAt, products, status, _id} = order
                <Card className="orders-card" key={order.createdAt}>
                  <h4>ID: {order._id}</h4>
                  <h4>Fecha: {convertirFechaHora(order.createdAt)}</h4>
                  <h4>Productos</h4>
                  {order.products?.map((product) => (
                    <Card className="orders-card__products">
                      <h5>Nombre: 🛍️{product.title}</h5>
                      <h5>Cantidad: #️⃣{product.quantity}</h5>
                      <br></br>
                    </Card>
                  ))}
                  <h4>Estado: {order.status}</h4>
                  <h3>Total: $💵{order.amount}</h3>
                </Card>
              )
              )
              : (<h1>No se encontraron ordenes</h1>)
            }
            </div>
          </section>
        )}
      {/* <div className="pagination__products">
          {orders.length > 3 && (
              <Pagination
              //propiedades del componente
                color="primary"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(orders.length / ordersPerPage)} //TOTAL DE PAGINAS
                page={currentPage}
                //llamamos la funcion 
                onChange={paginate}
                size="large"
              />
            )}
        </div> */}
      <Paginacíon 
        array={orders} 
        currentPage={currentPage} 
        dataPerPage={ordersPerPage}
        paginate={paginate}
      />
    </>
  );
};

export default Orders;
