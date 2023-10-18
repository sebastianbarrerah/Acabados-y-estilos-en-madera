import React from 'react'
import logoFooter from '../../assets/images/logo.png'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__navegacion">
            <ul className="footer__ul">
                <li className='footer__li'><a href="" className='ancora__footer'>Trabaja con nostros</a></li>
                <li className='footer__li'><a href="" className='ancora__footer'>Cotiza Aquí</a></li>
                <li className='footer__li'><a href="" className='ancora__footer'>Blog</a></li>
                <li className='footer__li'><a href="" className='ancora__footer'>Servicios</a></li>
                <li className='footer__li'><a href="" className='ancora__footer'>Contacto</a></li>
                <li className='footer__li'><a href="" className='ancora__footer'>Contacto</a></li>
            </ul>
        </div>
        <figure className='container__footer'>
            <img src={logoFooter} alt="logo" className='footer__logo'/>
        </figure>
        <div className="footer__info">
            <span className="item__footer">
                correo@gmail.com
            </span>
            <span className="item__footer">
                3115478562
            </span>
            <span className="item__footer">
                direccion
            </span>
            <span className="item__footer">
                Medellín - Colombia
            </span>
        </div>
        <div className="footer__derechos">
            <span>
            © 2023 Acabados y estilos en madera
            </span>
        </div>
    </footer>
  )
}

export default Footer