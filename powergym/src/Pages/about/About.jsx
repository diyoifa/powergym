import React from 'react'
import './About.css'
import Header from '../../Components/Header'
import headerImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/charles-gaudreault-xXofYCc3hqc-unsplash.jpg'
import MisionImage from '../../images/john-arano-h4i9G-de7Po-unsplash.jpg'
import OrganigramaImage from '../../images/organigrama.png'


const About = () => {
  return (
      <>
        <Header title = 'Acerca de powergym🏋️' image={headerImage}>
          Somos un pequeño gimnasio  fitness que proporciona equipos de última generación, programas de ejercicio y clases para ayudar a los clientes a alcanzar sus metas de salud y fitness. Nuestro enfoque se centra en la salud y el bienestar holísticos, y nos esforzamos por crear un ambiente acogedor y de apoyo para todos los clientes.        
        </Header>
        <section className="about__story">
          <div className="container about__story-container">
            
            <div className="about__section-content">
                <img  src={OrganigramaImage} alt="organigrama" />
            </div>
            
          </div>
        </section>

        <section className="about__vision">
          <div className="container about__vision-container">
            
            <div className="about__section-content">
              <h1>Nuestra Vision</h1>
              <p>
              en Power Gym para el 2026 nos convertiremos en un referente en el mercado de la industria del fitness, reconocidos por nuestros servicios de alta calidad, nuestra atención al cliente y nuestro enfoque personalizado en el entrenamiento físico y el bienestar.              </p>
            </div>
            <div className="about__section-image">
            <img src={VisionImage} alt="story img"/>
            </div>
          </div>
        </section>

        
        <section className="about__mision">
          <div className="container about__mision-container">
            <div className="about__section-image">
              <img src={MisionImage} alt="story img"/>
            </div>
            <div className="about__section-content">
              <h1>Nuestra Mision</h1>
              <p>
              En Power Gym, nuestra objetivo es brindar a nuestros clientes una experiencia de entrenamiento personalizada y efectiva, basada en la calidad de nuestros servicios y la atención al detalle. Nos esforzamos por fomentar la salud y el bienestar en nuestra comunidad y ayudar a nuestros clientes a alcanzar sus objetivos de fitness.              </p>
            </div>
          </div>
        </section>
      </>
  )
}

export default About
