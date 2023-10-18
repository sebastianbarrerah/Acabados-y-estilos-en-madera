import React from 'react'
import './benefits.scss'
import ahorro from '../../assets/images/ahorro.png'
import planificacion from '../../assets/images/planificacion.png'
import calidad from '../../assets/images/calidad.png'

const Benefits = () => {
  return (
    <section className="container__benefits">
        <h2 className='benefits__title'>Beneficios de contratar con nostros</h2>
        <div className='benefits__card'>
            <img src={ahorro} alt=""  className='benefits__img'/>
            <span className='benefits__subtitle'>Bajos precios</span>
            <span className='benefits__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis in sint officiis qui minima corrupti aspernatur possimus dolor tenetur temporibus.</span>
        </div>
        <div className='benefits__card'>
            <img src={planificacion} alt=""  className='benefits__img'/>
            <span className='benefits__subtitle'>Planificación</span>
            <span className='benefits__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis in sint officiis qui minima corrupti aspernatur possimus dolor tenetur temporibus.</span>
        </div>
        <div className='benefits__card'>
            <img src={calidad} alt=""  className='benefits__img'/>
            <span className='benefits__subtitle'>Calidad en nuestro trabajo</span>
            <span className='benefits__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis in sint officiis qui minima corrupti aspernatur possimus dolor tenetur temporibus.</span>
        </div>
    </section>
  )
}

export default Benefits