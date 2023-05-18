import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/apiCalls'
import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_6.jpg'
import Card from '../../UI/Card'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { PacmanLoader } from 'react-spinners';
import { useState } from 'react'
import Pagination from '@mui/material/Pagination';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Products.css"
import {Link} from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3
    //tomamos el ultimo elemento
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirtProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirtProduct, indexOfLastProduct)
    //console.log("🚀 products:", products)

    const paginate = (event, value) => {
      //wii set a new value for the current page once it change
      setCurrentPage(value);
      // window.scrollTo({ top: 1800, behavior: 'smooth' });
    }

    useEffect(() => {
      setLoading(true);
      getProducts(dispatch)
        //se ejecutara ya sea si se resuelve la promesa o no
        .finally(() => setLoading(false));
    }, [dispatch]);
    
    
  return (
    <>
      <Header title = 'Nuestros Productos' image={HeaderImage}>
        Encuentra todo lo que necesitas para alcanzar tus metas fitness en nuestra sección de productos. Ofrecemos una amplia gama de equipos de ejercicio, accesorios y suplementos nutricionales de calidad premium. Ya sea que estés buscando mejorar tu fuerza, resistencia o flexibilidad, tenemos productos para todos los niveles de condición física. Descubre nuestra selección cuidadosamente elegida de productos de las marcas líderes en la industria del fitness y comienza tu camino hacia un estilo de vida más saludable hoy mismo
      </Header>
      <div className="products">
        <section className="container products__container">
          {
              loading 
              ?(<div className='spinner__container'> <PacmanLoader color="var(--color-secondary)" size={60}/> </div>) 
              :(
                currentProducts.map((product) => 
                  <Card key={product._id} className='product'>
                    <div className="circle"></div>
                        <h2>{product.title}</h2>
                      <img src={product.img} alt="product"/>
                      <div className="info">
                        <div className="icon">
                            <Link to={"/cart"}>
                              <ShoppingCartOutlinedIcon/>
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to={`/product/${product._id}`}>
                                <SearchOutlinedIcon/>
                            </Link>
                        </div>
                        {/* <div className="icon_wish">
                            <FavoriteIcon/>
                        </div> */}
                      </div>  
                  </Card>
              )
            )
          }
        </section>
        <div className="pagination__products">
        {products.length > 3 && (
            <Pagination
            //propiedades del componente
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(products.length / productsPerPage)}
              page={currentPage}
              //llamamos la funcion 
              onChange={paginate}
              size="large"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Products
