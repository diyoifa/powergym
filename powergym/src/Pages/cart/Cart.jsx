import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Add, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";
// import {addQuantity, resQuantity} from '../../redux/cartRedux'
import {deleteProductSuccess} from '../../redux/cartRedux'
import ClearIcon from '@mui/icons-material/Clear';
import './Cart.css'
import swal from 'sweetalert';

const Cart = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const cart = useSelector(state => state.cart)
     const dispatch = useDispatch()
    //  const handleClick = (product)=>{
        
    //     dispatch(deleteProductSuccess(product._id))
    //     // swal("Buen trabajo!", "producto agregado correctamente!", "success");
    //     console.log(product)
    // }
    const handleDeleteProduct = productId => {
        dispatch(deleteProductSuccess(productId));
        swal("Buen trabajo!", "producto eliminado correctamente!", "success");
      };
  return (
    <>
      <section className="container wrapper__cart">
            <h1>🛍️TU CARRITO💌🐓</h1>
            <div className="top__cart">
                <div className="top-button-left__cart">
                    <Link to="/products">
                        <button className='btn'>Continuar Comprando</button>
                    </Link>
                </div>
                <div className="top__text">
                    <h3>Productos en la Cesta ({quantity}) 🛒</h3>
                    {/* <h3>lista de deseos 🥺(0)</h3> */}
                </div>
                <div className="top-button-right__cart">
                    <button className="btn">Comprar ahora</button>
                </div>
            </div>
            <div className="botton__cart">
                <div className="info__cart">
                    {
                        cart.products?.map(product => 
                            <div className="card product__cart" key={product._id}>
                                <div className="product-detail__cart" key={product._id}>
                                    <div className="product-detail-img__cart">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4 style={{marginBottom: "1rem", marginTop:"1.5rem"}}> Producto: {product.title} </h4>
                                        <h4 style={{marginBottom: "1rem"}}> <b/>ID: <b/> {product._id} </h4>
                                        <h4 style={{marginBottom: "1rem", color:"var(--color-secondary)"}}> Precio: 💸${product.price} </h4>
                                    </div>
                                </div>
                                <div className="price-detail__cart" key={product._id}>
                                    <div className="product-amount__cart">
                                        {/* <Remove style={{cursor: "pointer", color:"var(--color-secondary)"}} onClick = {()=>{dispatch(addQuantity(product))}}/> */}
                                            <p className='quantity'>Cantidad:  </p>
                                            <p className="amount">{product.quantity}</p>
                                        {/* <Add style={{cursor: "pointer", color:"var(--color-secondary)"}} onClick = {()=>{dispatch(resQuantity())}}/> */}
                                    </div>
                                    <div className="product-price">
                                       Total: $💸{product.price * product.quantity}
                                    </div>
                                    <div className='icon icon__cart'>
                                        <ClearIcon onClick={()=>handleDeleteProduct(product._id)} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <hr/>  
                </div>
                <div className="summary__cart">
                    <h3>Resumen del la compra</h3>
                    <div className="summary-item_cart">
                        <span style={{color: "var(--color-gray-200)", fontSize:"28px"}}>Total</span>
                        <span style={{color: "var(--color-gray-200)", fontSize:"28px"}}>$💵{cart.total}</span>
                    </div>
                    <button className='btn summary-btn__cart'>COMPRAR</button>
                </div>
            </div>
      </section>
    </>
  )
}

export default Cart
