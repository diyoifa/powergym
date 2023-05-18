import React from 'react'
import { Link } from 'react-router-dom'                                                                                                                                                                                                                                       
import Logo from '../images/logo.png'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo' onClick={()=> window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}>
                    <img src={Logo} alt=' Footer Logo img' />
                </Link>
                <p>
                      Diyoifasoft is a web development company founded by Gregorio Cardona, dedicated to providing customized, high-quality solutions to meet the needs of its clients.
                </p>
                <div className="footer__socials">
                    <a  href="https://www.linkedin.com/in/jose-gregorio-cardona-guarin-95306a19a/" target='_blank' rel="noreferrer">{<FaLinkedin/>}</a>
                    <a  href="https://www.facebook.com/profile.php?id=100090911342832" target='_blank' rel="noreferrer">{<FaFacebook/>}</a>
                    <a  href="https://twitter.com/" target='_blank' rel="noreferrer">{<AiOutlineTwitter/>}</a>
                    <a  href="https://instagram.com/" target='_blank' rel="noreferrer">{<AiFillInstagram/>}</a>
                </div>
            </article>  
            <article>
                <h4>Permalinks</h4>

                <Link to='/' onClick={()=> window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}>
                    inicio
                </Link>

                <Link to='/about'
                    onClick={()=> window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}
                >acerca</Link>

                <Link to='/plans'
                    onClick={()=> window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}
                >Planes</Link>
                <Link to='/contact'
                    onClick={()=> window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}
                >Contacto</Link>
            </article>  

            <article>
                <h4>Get in Touch</h4>
                <Link to='https://diyoifa.github.io/portfolio/build'target='_blank'>Contact us</Link>
                <Link to='https://diyoifa.github.io/portfolio/build'target='_blank'>Support</Link>
            </article> 
            
            <article>
                <h4>Insigths</h4>
                <Link to='https://diyoifa.github.io/portfolio/build' target='_blank'>Blog</Link>
                <Link to='https://www.unipamplona.edu.co/'target='_blank'>Case studies</Link>
                <Link to='https://diyoifa.github.io/portfolio/build'target='_blank'>Events</Link>
                <Link to='https://diyoifa.github.io/portfolio/build'target='_blank'>Comunities</Link>
            </article> 
        </div>
        <div className="footer__copyrights">
            <small>2023 Gregorio Cardona &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
