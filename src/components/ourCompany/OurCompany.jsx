import React from 'react'
import './ourCompany.scss'
import {useNavigate} from 'react-router-dom'

const OurCompany = () => {
  const navigate = useNavigate()
  return (
    <section className="container__company">
        <h1 className='title__company'>Acabados y estilos en madera</h1>
        <p className='text__company'>
        Con una sólida base en Medellín y una década de experiencia, nuestro equipo se ha especializado en la carpintería, ebanistería y una amplia gama de servicios relacionados con la madera. A lo largo de los años, hemos construido una reputación basada en la calidad de nuestros productos y la satisfacción del cliente. Nuestra experiencia y pasión por la madera nos han permitido expandir nuestras operaciones para atender a empresas en toda Colombia. Nos enorgullece crear productos de madera a medida y proporcionar servicios de acabado excepcionales, adaptados a las necesidades únicas de nuestros clientes
        </p>
        <button className='company__ours'>Conoce mas sobre nosotros</button>
    </section>
  )
}

export default OurCompany