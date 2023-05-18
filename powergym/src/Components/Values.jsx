import React from 'react'
import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
           
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values__image" />
                </div>
            </div>

            <div className="values__right">
                <SectionHeader icon={<GiCutDiamond/>}title = 'Valores en POWER GYM'/>
                <p>
                Recuerda siempre que cada entrenamiento te acerca a tus objetivos. Cada gota de sudor es una pequeña victoria que te acerca un paso más a convertirte en la mejor versión de ti mismo. No te rindas, sigue adelante y convierte tus sueños en realidad. ¡Tú puedes hacerlo!
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return <Card key={id} className='values__value'>
                                        <span><img src={icon} alt="value icon" /></span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                        
                                </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
