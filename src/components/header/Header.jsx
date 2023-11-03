import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/logo.png'
import expand from '../../assets/images/expand.png'

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className='header'>
            <figure className='header__figure'>
                <img src={logo} alt="" className='header__figure--img' onClick={() => navigate("/")} />
            </figure>
            <nav className="header__nav">
                <ul className='header__ul'>
                    <li className='header__ul--li'><a href="" className='nav__ancora active__header'>Inicio</a></li>
                    <li className='header__ul--li'>
                        <a href="" className='nav__ancora lista__servicios'>Servicios <img src={expand} alt="" className='icon__expand' /></a>
                        <div className='header__servicios'>
                            <ul className="servicios__ul">
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Cocinas</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Muebles</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>driwall</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>vitrinas</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Marmol</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Electricidad</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Obras</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios'>Acabados</a></li>
                                <li className='header__li--servicios'><a href="" className='ancora--servicios '>Remodelación</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Carpinteria</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Blog</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Cotiza aquí</a></li>
                    <li className='header__ul--li'><a href="" className='nav__ancora'>Contacto</a></li>
                </ul>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 -960 960 960" width="44" fill='#BB1F25'><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" className='burger__icon' /></svg>

            <div className="menu">
                <h2 className='mensaje'>Este es tu mensaje visible</h2>
                <ul>
                    <li>nada</li>
                    <li>dfdsfdsf</li>
                    <li>dfdsfds</li>
                    <li>dsfdsf</li>
                    <li>dfdsfdsf</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;