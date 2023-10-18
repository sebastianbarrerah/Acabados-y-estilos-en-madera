import React from 'react'
import './location.scss'

const Location = () => {
  return (
    <section className='container__location'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.2178231615826!2d-75.6161129!3d6.2349928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44291aa9e425db%3A0xd9331b5f4785e63c!2sACABADOS%20Y%20ESTILOS%20EN%20MADERA%20SAS!5e0!3m2!1ses-419!2sco!4v1697237546492!5m2!1ses-419!2sco" width="50%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map__location'></iframe>
        <div className='info__location'>
            <h3 className='title__location'>Aquí estamos ubicados</h3>
            <span className="address">
                <strong>Dirección: </strong>Cra falsa 123 # 25b 12
            </span>
            <span className="cel__location">  
                <strong>Celular: </strong>3115478524
            </span>
            <span className="tel__location">
                <strong>Telefono:</strong>23854785
            </span>

           <span className="hours__location">Horarios de atención</span>
            <span className="week__location">
                <strong>Lunes a sabado:</strong> 8:00 - 6:00
                <br />
                <strong>Domingos y festivos: </strong>9:00 - 2:00
            </span>

        </div>
    </section>
  )
}

export default Location