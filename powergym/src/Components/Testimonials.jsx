import React,{useState} from 'react'
import SectionHeader from './SectionHeader'
import {ImQuotesLeft,ImQuotesRight} from'react-icons/im'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from '../UI/Card'

import {testimonials} from '../data'

const Testimonials = () => {
const[index, setIndex] = useState(0)
const { name, quote, job, avatar} = testimonials[index]
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHeader 
                icon={<ImQuotesLeft/>}
                title='Testimonios'
                icon2={<ImQuotesRight/>}
                className = 'testimonials__head' 
            />
            <Card className='testimonial'>
                <div className="testimonial__avatar">
                    <img src={avatar} alt={`${name} img`} />
                </div>
                <p className='testimonial__quote'>
                    {`"${quote}"`}
                </p>
                <h4>{name}</h4>
                <small className='testimonial__title'>{job}</small>
            </Card>

            <div className="testimonials__btn-container">
               <button 
                    className='testimonials__btn'
                    onClick={()=> {index > 0 ? setIndex(index - 1) : setIndex(testimonials.length - 1) }}
                >

                <IoIosArrowDropleftCircle/>
                </button>
               <button 
                className='testimonials__btn'
                onClick={()=> {index < 4 ? setIndex(index + 1) : setIndex(0) }}

                >

                    <IoIosArrowDroprightCircle/>

                </button>
            </div>

        </div>
    </section>
  )
}

export default Testimonials
