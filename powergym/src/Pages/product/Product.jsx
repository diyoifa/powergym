import React from 'react'
import { Link, useLocation } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import {publicRequest} from '../../requestMethods'
import { useState } from 'react';
import { Add, Remove } from "@mui/icons-material";
import "./Product.css"
import { useDispatch } from "react-redux";
import {addProduct} from '../../redux/cartRedux'
import { useSelector } from 'react-redux'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import swal from 'sweetalert';

//import {getProduct} from "../../redux/apiCalls"
const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    console.log("🚀Product ~ id:", id)
    const[product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    //recorre el array y me devuelve true si lo encuentra
    const isProductInCart = cart.products.some(item => item._id === product._id);
    //console.log("🚀 ~ file: Product.jsx:27 ~ Product ~ isProductInCart:", isProductInCart)
    // const handleClick = ()=>{
    //   dispatch(addProduct({...product, quantity}))
    //   swal("Buen trabajo!", "producto agregado correctamente!", "success");
    // }

  const handleClick = () => {
    //si el producto ya esta en el carrito
    
    if (isProductInCart) {
      swal("Error", "El producto ya fue agregado en el carrito", "error");
    } else {
      dispatch(addProduct({ ...product, quantity }));
      swal("Buen trabajo!", "Producto agregado correctamente!", "success");
    }
  };

    //const dispatch = useDispatch()
    //const product = useSelector(state => state.product.product)
    useEffect(()=>{
       const getProduct = async()=>{
        try {
          const res = await publicRequest.get(`/products/${id}`)
          setProduct(res.data)
          window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
        } catch (error) {
          console.log("🚀 ~ file: Product.jsx:19 ~ getProduct ~ error:", error)
        }
       }
       getProduct()
    },[id])
    console.log("🚀product:", product)

  return (
    <>
      <section className="container product__container">
          <div className="card image__container">
            <img src={product?.img} alt={product?.title} />
          </div>
          <div className="info_container">
            <h1 style={{color: "var(--color-primary)"}}>{product?.title}💪</h1>
            <h4>{product?.desc}</h4>
            <h2>$💵{product?.price}</h2>
          
            <div className="add_container">
              <div className="amount__container">
              <Remove style={{cursor: "pointer", color:"var(--color-secondary)"}} onClick = {()=>setQuantity(quantity === 1 ? 1 : quantity - 1)} />
                <p className="amount">{quantity}</p>
              <Add style={{cursor: "pointer", color:"var(--color-secondary)"}} onClick = {()=>setQuantity(quantity + 1)}/>
              </div>
            </div>
            <button className='btn' onClick={handleClick}>💙AGREGAR AL CARRITO💙</button>
            <Link to={"/products"}>
            <KeyboardBackspaceIcon 
              style={{
                width: "80px",
                height: "50px",
              }}
            />
            </Link>
          </div>
      </section>
    </>
  )
}

export default Product
