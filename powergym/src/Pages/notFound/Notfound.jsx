import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <section >
        <div className="container notFound__container">
          <h1>Page not Found</h1>
          <Link to='/' className='btn'>Volver al inicio</Link>
        </div>
    </section>
  )
}

export default Notfound
