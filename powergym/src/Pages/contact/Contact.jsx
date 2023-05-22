import React from 'react'
import './Contact.css'
import Header from '../../Components/Header'
import HeaderImage from '../../images/background_login.jpg'
import {AiOutlineMail} from 'react-icons/ai'
import {BsDiscord, BsWhatsapp} from 'react-icons/bs'
import QrImage from '../../images/qr.jpg'

const Contact = () => {
  return (
    <>
      <Header title='Contactanos' image={HeaderImage}>
        Empodera tu vida: Encuentra inspiración y guía aquí <br/>
        Conéctate: ¡Contáctanos hoy mismo!  
      </Header>
      <section className="contact">
          <div className="contact__container">
            <div className="contact__wrapper">
              <a href="mailto:jose.cardona@unipamplona.edu.co" target='_blank' rel="noreferrer"><AiOutlineMail/></a>
              <a href="https://discord.com/channels/gregorio#5839" target='_blank' rel="noreferrer"><BsDiscord/></a>
              <a href="https://wa.link/wtnqzo" target='_blank' rel="noreferrer"><BsWhatsapp/></a>
            </div>
            <div className="contact__container-QR">
              <img src={QrImage} alt=" QR Img" />
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact
